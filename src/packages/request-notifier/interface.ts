type ID = string | number

export type BeforeCallback = () => ID

export type AfterCallbackParams<Response> = {
    id: ID
    response: Response
}
export type AfterCallback<Response> = (afterCallbackParams: AfterCallbackParams<Response>) => void

export type NarrowingCallback<Response> = (response: Response) => boolean

export type RequestParams<
    ApiMethod extends (...args: any[]) => Promise<IResponse>, 
    IResponse
> = {
    readonly apiMethod: ApiMethod
    readonly before?: BeforeCallback | null
    readonly success?: AfterCallback<IResponse> | null
    readonly reject?: AfterCallback<IResponse> | null
    readonly narrowing?: NarrowingCallback<IResponse> | null
}