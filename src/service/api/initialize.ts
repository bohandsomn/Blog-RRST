import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import AuthorizationResponse from '../../store/authorization/api/response'
import { ErrorResponse } from '../../utility/type'
import tokenRepository from './tokenRepository'

class Initialize {
    private static isRefreshed = false

    private static refresh = async () => {
        this.isRefreshed = true
        return axios.get(process.env.NEXT_PUBLIC_BASE_URL + 'authorization/refresh', {withCredentials: true})
            .then((response) => {
                const refreshResponse: AuthorizationResponse.Refresh | ErrorResponse = response.data
                return refreshResponse.data?.accessToken
            })
    }

    public static async requestOnFulfilled(config: AxiosRequestConfig) {
        if (config.headers) {
            config.headers.authorization = `Bearer ${tokenRepository.read() || ''}`
        }

        return config
    }

    public static async requestOnRejected(error: any) {
        return error
    }

    public static async responseOnFulfilled(config: AxiosResponse) {
        return config
    }

    public static async responseOnRejected(network: AxiosInstance, error: AxiosError) {
        if (error.response?.status !== 401 || this.isRefreshed) {
            this.isRefreshed = false
            return error.response
        }
        
        const accessToken = await this.refresh()
        typeof accessToken === 'string'
            ? tokenRepository.save(accessToken)
            : tokenRepository.delete()
        
        if (tokenRepository.read() !== null) {
            return network.request(error.config)
        }

        return error.response
    }
}

export default Initialize