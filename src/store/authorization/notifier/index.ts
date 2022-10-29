import RequestNotifier from '@/packages/request-notifier'
import Notification from '@/packages/notification'
import authorizationAPI from '../api'

const notification = new Notification()

const registration = new RequestNotifier<typeof authorizationAPI.registration>({
    apiMethod: (...data) => authorizationAPI.registration(...data),
    before: () => notification.loading('registration request has been sent'),
    narrowing: (response) => response.data !== undefined,
    success: ({ id, response }) => notification.success(id, response.message),
    reject: ({ id, response }) => notification.error(id, response.message)
})

const login = new RequestNotifier<typeof authorizationAPI.login>({
    apiMethod: (...data) => authorizationAPI.login(...data),
    before: () => notification.loading('login request has been sent'),
    narrowing: (response) => response.data !== undefined,
    success: ({ id, response }) => notification.success(id, response.message),
    reject: ({ id, response }) => notification.error(id, response.message)
})

const autoLogin = new RequestNotifier<typeof authorizationAPI.autoLogin>({
    apiMethod: (...data) => authorizationAPI.autoLogin(...data)
})

const logout = new RequestNotifier<typeof authorizationAPI.logout>({
    apiMethod: (...data) => authorizationAPI.logout(...data),
    before: () => notification.loading('logout request has been sent'),
    narrowing: (response) => response.data === null,
    success: ({ id, response }) => notification.success(id, response.message),
    reject: ({ id, response }) => notification.error(id, response.message)
})

const authorizationNotifier = {
    registration,
    login,
    autoLogin,
    logout,
}

export default authorizationNotifier