import axios, { Axios, AxiosRequestConfig } from 'axios'
import { ErrorResponse } from '../../utility/type'
import Initialize from './initialize'

class HandleAPI {
    private readonly network 

    constructor(config?: ConstructorParameters<typeof Axios>[0]) {
        this.network = this._createNetwork(config)
        this._setRequestInterceptor()
        this._setResponseInterceptor()
    }

    protected async json<Response>(config: AxiosRequestConfig): Promise<Response | ErrorResponse> {
        return this.network.request<Response>(config)
            .then((response) => response.data)
    }

    private _createNetwork(config?: ConstructorParameters<typeof Axios>[0]) {
        const network = axios.create({
            baseURL: (process.env.NEXT_PUBLIC_BASE_URL || '') + (config?.url || ''),
            withCredentials: true,
            validateStatus: () => true,
            responseType: 'json',
            ...config
        })
        return network
    }

    private _setRequestInterceptor() {
        this.network.interceptors.request.use(
            (config) => Initialize.requestOnFulfilled(config), 
            (error) => Initialize.requestOnRejected(error),
        )
    }

    private _setResponseInterceptor() {
        this.network.interceptors.response.use(
            (config) => Initialize.responseOnFulfilled(config), 
            (error) => Initialize.responseOnRejected(this.network, error),
        )
    }
}

export default HandleAPI