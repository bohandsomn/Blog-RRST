import { configureStore } from '@reduxjs/toolkit'
import authorizationReducer from './authorization/slice'
import middleware, { saga } from './middleware'

const store = configureStore({
    reducer: {
        authorization: authorizationReducer
    },
    middleware: [middleware]
})

middleware.run(saga)

export default store
