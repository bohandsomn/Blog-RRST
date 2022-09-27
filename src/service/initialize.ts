import authorizationAPI from '../store/authorization/api'
import { ErrorResponse } from '../utility/type'
import token from './token'

type Response<Data> = {
    data: Data
    status: number
}

class Initialize {
    private static isRefreshed = false

    private static refresh = async () => {
        this.isRefreshed = true

        const refreshResponse = await authorizationAPI.refresh()
        if (!refreshResponse.data) {
            token.delete()
            return 
        }

        token.save(refreshResponse.data.accessToken)
    }

    public static json = async <Data>(response: Response<Data | ErrorResponse>) => {
        if (response.status < 400) {
            this.isRefreshed = false
            return response.data as Data
        }

        if (this.isRefreshed || response.status !== 401) {
            this.isRefreshed = false
            return response.data as ErrorResponse
        }

        await this.refresh()

        if (token.read() !== null) {
            throw new Error() // Go to .catch() and re-request the original request 
        }

        return response.data as ErrorResponse
    }
}

export default Initialize