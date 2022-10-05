import HandleAPI from '../../../service/api/handle-api'
import UserRequest from './request'
import UserResponse from './response'

class UserAPI extends HandleAPI {
    async update(data: UserRequest.Update) {
        return this.json<UserResponse.Update>({method: 'put', data})
    }
    
    async getOne(data: UserRequest.GetOne) {
        return this.json<UserResponse.GetOne>({method: 'get', url: `/${data.userId}`})
    }
}

const userAPI = new UserAPI({url: 'user'})

export default userAPI