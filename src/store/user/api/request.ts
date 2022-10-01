namespace UserRequest {
    export type Update = {
        name: string
        surname: string | null
        email: string
        login: string
        birthday: string | null
        privacy: string
    }
    export type GetOne = {
        userId: string
    }
}

export default UserRequest