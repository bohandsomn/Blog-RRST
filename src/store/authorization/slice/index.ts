import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import tokenRepository from '../../../service/api/tokenRepository'
import type { UserDTO } from '../interface'
import type { State } from '../../interface'
import type AuthorizationRequest from '../api/request'
import type AuthorizationResponse from '../api/response'
import type UserRequest from '../../user/api/request'
import type UserResponse from '../../user/api/response'

const initialState: State<UserDTO> = {
    data: null,
    previous: null,
    error: null,
    isLoading: false
}

const authorizationSlice = createSlice({
    name: 'authorization',
    initialState,
    reducers: {
        registrationSuccess: (state, action: PayloadAction<AuthorizationResponse.Registration['data']>) => {
            tokenRepository.save(action.payload.accessToken)
            state.previous = state.data
            state.data = action.payload.user
            state.error = null
            state.isLoading = false
        },
        registrationReject: (state, action: PayloadAction<string>) => {
            tokenRepository.delete()
            state.error = action.payload
            state.isLoading = false
        },
        registration: (state, action: PayloadAction<AuthorizationRequest.Registration>) => {
            state.data = null
            state.error = null
            state.isLoading = true
        },

        loginSuccess: (state, action: PayloadAction<AuthorizationResponse.Login['data']>) => {
            tokenRepository.save(action.payload.accessToken)
            state.previous = state.data
            state.data = action.payload.user
            state.error = null
            state.isLoading = false
        },
        loginReject: (state, action: PayloadAction<string>) => {
            tokenRepository.delete()
            state.error = action.payload
            state.isLoading = false
        },
        login: (state, action: PayloadAction<AuthorizationRequest.Login>) => {
            state.data = null
            state.error = null
            state.isLoading = true
        },

        autoLoginSuccess: (state, action: PayloadAction<AuthorizationResponse.AutoLogin['data']>) => {
            tokenRepository.save(action.payload.accessToken)
            state.previous = state.data
            state.data = action.payload.user
            state.error = null
            state.isLoading = false
        },
        autoLoginReject: (state, action: PayloadAction<string>) => {
            tokenRepository.delete()
            state.error = action.payload
            state.isLoading = false
        },
        autoLogin: (state) => {
            state.data = null
            state.error = null
            state.isLoading = true
        },

        logoutSuccess: (state) => {
            tokenRepository.delete()
            state.previous = null
            state.data = null
            state.error = null
            state.isLoading = false
        },
        logoutReject: (state, action: PayloadAction<string>) => {
            state.error = action.payload
            state.isLoading = false
        },
        logout: (state) => {
            state.data = null
            state.previous = null
            state.error = null
            state.isLoading = true
        },

        updateSuccess: (state, action: PayloadAction<UserResponse.Update['data']>) => {
            tokenRepository.save(action.payload.accessToken)
            state.previous = state.data
            state.data = action.payload.user
            state.error = null
            state.isLoading = false
        },
        updateReject: (state, action: PayloadAction<string>) => {
            tokenRepository.delete()
            state.error = action.payload
            state.isLoading = false
        },
        update: (state, action: PayloadAction<UserRequest.Update>) => {
            state.data = null
            state.error = null
            state.isLoading = true
        },
    }
})

export const {
    registrationSuccess,
    registrationReject,
    registration,
    loginSuccess,
    loginReject,
    login,
    autoLoginSuccess,
    autoLoginReject,
    autoLogin,
    logoutSuccess,
    logoutReject,
    logout,
    updateSuccess,
    updateReject,
    update,
} = authorizationSlice.actions
export default authorizationSlice.reducer