import createSagaMiddleware from 'redux-saga'
import { all, call, spawn } from 'redux-saga/effects'
import authorizationSaga from './authorization/saga'

const middleware = createSagaMiddleware()

export function* saga() {
    const sagas = [
        authorizationSaga.registration, 
        authorizationSaga.autoLogin, 
        authorizationSaga.login,
        authorizationSaga.logout,
    ]
  
    yield all(
        sagas.map((saga) => {
            return spawn(function* () {
                while (true) {
                    try {
                        yield call(saga)
                        break
                    } catch (error) {
                        console.log(error)
                    }
                }
            })
        })
    )
}

export default middleware