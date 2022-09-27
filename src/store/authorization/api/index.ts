import HandleAPI from '../../../service/handle-api'
import AuthorizationRequest from './request'
import AuthorizationResponse from './response'

class AuthorizationAPI extends HandleAPI {
    async registration(data: AuthorizationRequest.Registration) {
        return this.handleJson<AuthorizationResponse.Registration>({method: 'post', url: '/registration', data})
    }

    async login(data: AuthorizationRequest.Login) {
        return this.handleJson<AuthorizationResponse.Login>({method: 'post', url: '/login', data})
    }

    async autoLogin() {
        return this.handleJson<AuthorizationResponse.AutoLogin>({method: 'get', url: '/auto-login'})
    }

    async refresh() {
        return this.handleJson<AuthorizationResponse.Refresh>({method: 'get', url: '/refresh'})
    }

    async logout() {
        return this.handleJson<AuthorizationResponse.Logout>({method: 'get', url: '/logout'})
    }
}

export default new AuthorizationAPI({url: 'authorization'})