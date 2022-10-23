import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { PrivacyDTO } from '../interface'
import type { State } from '../../interface'
import type PrivacyRequest from '../api/request'
import type PrivacyResponse from '../api/response'

const initialState: State<PrivacyDTO[]> = {
    data: null,
    previous: null,
    error: null,
    isLoading: false
}

const privacySlice = createSlice({
    name: 'privacy',
    initialState,
    reducers: {
        createSuccess: (state, action: PayloadAction<PrivacyResponse.Create['data']>) => {
            state.previous = state.data
            state.data = [...(state.data || []), action.payload]
            state.error = null
            state.isLoading = false
        },
        createReject: (state, action: PayloadAction<string>) => {
            state.error = action.payload
            state.isLoading = false
        },
        create: (state, action: PayloadAction<PrivacyRequest.Create>) => {
            state.data = null
            state.error = null
            state.isLoading = true
        },

        getManySuccess: (state, action: PayloadAction<PrivacyResponse.GetMany['data']>) => {
            state.previous = state.data
            state.data = action.payload
            state.error = null
            state.isLoading = false
        },
        getManyReject: (state, action: PayloadAction<string>) => {
            state.error = action.payload
            state.isLoading = false
        },
        getMany: (state, action: PayloadAction<PrivacyRequest.GetMany>) => {
            state.data = null
            state.error = null
            state.isLoading = true
        },
    }
})

export const {
    createSuccess,
    createReject,
    create,
    getManySuccess,
    getManyReject,
    getMany,
} = privacySlice.actions
export default privacySlice.reducer