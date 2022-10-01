import HandleAPI from '../../../service/handle-api'
import AuthorizationRequest from './request'
import AuthorizationResponse from './response'

class AuthorizationAPI extends HandleAPI {
    async registration(data: AuthorizationRequest.Registration) {
        return this.json<AuthorizationResponse.Registration>({method: 'post', url: '/registration', data})
    }

    async login(data: AuthorizationRequest.Login) {
        return this.json<AuthorizationResponse.Login>({method: 'post', url: '/login', data})
    }

    async autoLogin() {
        return this.json<AuthorizationResponse.AutoLogin>({method: 'get', url: '/auto-login'})
    }

    async logout() {
        return this.json<AuthorizationResponse.Logout>({method: 'get', url: '/logout'})
    }
}

const authorizationAPI = new AuthorizationAPI({url: 'authorization'})

export default authorizationAPI