export type BeforeCallback = () => void
export type AfterCallback = () => void
export type NarrowingCallback<Response> = (response: Response) => boolean