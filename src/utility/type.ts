import React from "react"

export type JsonResponse<Data> = {
    readonly data: Data
    readonly message: string
}

export type ErrorResponse = {
    readonly data?: undefined
    readonly message: string
}

export type MockTest<Request, Response> = {
    readonly request: Request
    readonly response: Response
}

export type ComponentPropsStorybook<DefaultProps> = React.FC<
    NonNullable<DefaultProps> & {theme: 'dark' | 'light'}
>