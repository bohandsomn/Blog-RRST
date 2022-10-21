import autoLoginWatcher from './autoLogin'
import loginWatcher from './login'
import logoutWatcher from './logout'
import registrationWatcher from './registration'

const authorizationSaga = {
    registration: registrationWatcher,
    autoLogin: autoLoginWatcher,
    login: loginWatcher,
    logout: logoutWatcher,
}

export default authorizationSaga