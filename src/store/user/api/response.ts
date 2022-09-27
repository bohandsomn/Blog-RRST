namespace UserResponse {
    export type UserDTO = {
        id: number
        name: string
        surname: string | null
        email: string
        login: string
        isActivation: boolean
        birthday: string
    }
}

export default UserResponse