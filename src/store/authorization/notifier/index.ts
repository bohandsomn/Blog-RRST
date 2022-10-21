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
    apiMethod: (...data) => authorizationAPI.autoLogin(...data),
    before: () => notification.loading('autoLogin request has been sent'),
    narrowing: (response) => response.data !== undefined,
    success: ({ id, response }) => notification.success(id, response.message),
    reject: ({ id, response }) => notification.error(id, response.message)
})

const logout = new RequestNotifier<typeof authorizationAPI.logout>({
    apiMethod: (...data) => authorizationAPI.logout(...data),
    before: () => notification.loading('logout request has been sent'),
    narrowing: (response) => response === undefined,
    success: ({ id }) => notification.success(id, 'Successful logout'),
    reject: ({ id }) => notification.error(id, 'Failed logout')
})

const authorizationNotifier = {
    registration,
    login,
    autoLogin,
    logout,
}

export default authorizationNotifier