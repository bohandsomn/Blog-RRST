import store from '.'

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export type State<Data> = {
    data: Data | null
    previous: Data | null
    error: string | null
    isLoading: boolean
}