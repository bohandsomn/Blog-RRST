import { configureStore } from '@reduxjs/toolkit'
import authorizationReducer from './authorization/slice'
import privacyReducer from './privacy/slice'
import middleware, { saga } from './middleware'

const store = configureStore({
    reducer: {
        authorization: authorizationReducer,
        privacy: privacyReducer,
    },
    middleware: [middleware]
})

middleware.run(saga)

export * from './selector'
export default store
