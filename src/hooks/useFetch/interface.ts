export type UseFetchReturned<Data> = {
    data: Data | null
    previous: Data | null
    isLoading: boolean
    error: string | null
    onSuccess: (data: Data) => void
    onReject: (error: string) => void
    onPending: () => void
}

export type State<Data> = {
    data: Data | null
    isLoading: boolean
    error: string | null
}