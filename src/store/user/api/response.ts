import { JsonResponse } from '../../../utility/type'

namespace UserResponse {
    export type UserDTO = {
        id: number
        name: string
        surname: string | null
        email: string
        login: string
        isActivation: boolean
        birthday: string | null
    }
    type UserData = {
        user: UserDTO
        accessToken: string
    }
    export type Update = JsonResponse<UserData>
    export type GetOne = JsonResponse<UserDTO>
}

export default UserResponse