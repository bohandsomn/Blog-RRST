import autoLoginWatcher from './autoLogin'
import loginWatcher from './login'
import logoutWatcher from './logout'
import registrationWatcher from './registration'
import updateWatcher from './update'

const authorizationSaga = {
    registration: registrationWatcher,
    autoLogin: autoLoginWatcher,
    login: loginWatcher,
    logout: logoutWatcher,
    update: updateWatcher,
}

export default authorizationSaga