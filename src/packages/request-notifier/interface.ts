type ID = string | number

export type BeforeCallback = () => ID

export type AfterCallbackParams<Response> = {
    id: ID
    response: Response
}
export type AfterCallback<Response> = (afterCallbackParams: AfterCallbackParams<Response>) => void

export type NarrowingCallback<Response> = (response: Response) => boolean

export type RequestParams<
    ApiMethod extends (...args: any[]) => Promise<Response>, 
    Response
> = {
    readonly apiMethod: ApiMethod
    readonly before?: BeforeCallback | null
    readonly success?: AfterCallback<Response> | null
    readonly reject?: AfterCallback<Response> | null
    readonly narrowing?: NarrowingCallback<Response> | null
}