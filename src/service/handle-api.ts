import { Axios, AxiosRequestConfig } from 'axios'
import { ErrorResponse } from '../utility/type'
import Initialize from './initialize'
import token from './token'

class HandleAPI {
    readonly network 

    constructor(config?: ConstructorParameters<typeof Axios>[0]) {
        this.network = this.getNetwork(config)
    }

    async handleJson<Response>(config: AxiosRequestConfig): Promise<Response | ErrorResponse> {
        return this.network.request(config)
            .then(Initialize.json)
            .catch(() => this.network.request(config))
    }

    private getNetwork(config?: ConstructorParameters<typeof Axios>[0]) {
        const network = new Axios({
            baseURL: (process.env.NEXT_PUBLIC_BASE_URL || '') + (config?.url || ''),
            withCredentials: true,
            validateStatus: () => true,
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                withCredentials: true,
            },
            responseType: 'json',
            ...config
        })
    
        network.interceptors.request.use((config) => {
            if (config.headers) {
                config.headers.authorization = `Bearer ${token.read() || ''}`
            }
            config.data = JSON.stringify(config.data)
            return config
        })
    
        network.interceptors.response.use((config) => {
            config.data = JSON.parse(config.data)
            return config
        })
    
        return network
    }
}

export default HandleAPI