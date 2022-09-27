namespace AuthorizationRequest {
    export type Registration = {
        name: string
        email: string
        login: string
        password: string
    }
    export type Login = {
        login: string
        password: string
    }
    export type AutoLogin = void
    export type Refresh = void
    export type Logout = void
}

export default AuthorizationRequest