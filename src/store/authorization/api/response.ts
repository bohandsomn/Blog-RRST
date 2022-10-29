import { JsonResponse } from "../../../utility/type"
import UserResponse from "../../user/api/response"

namespace AuthorizationResponse {
    export type UserData = {
        accessToken: string
        user: UserResponse.UserDTO
    }
    export type Registration = JsonResponse<UserData>
    export type Login = JsonResponse<UserData>
    export type AutoLogin = JsonResponse<UserData>
    export type Refresh = JsonResponse<UserData>
    export type Logout = JsonResponse<null>
}

export default AuthorizationResponse