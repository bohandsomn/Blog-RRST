export type JsonResponse<Data> = {
    data: Data
    message: string
}

export type ErrorResponse = {
    data: undefined
    message: string
}