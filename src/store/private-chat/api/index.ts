import HandleAPI from '../../../service/api/handle-api'
import PrivateChatRequest from './request'
import PrivateChatResponse from './response'

class PrivateChatAPI extends HandleAPI {
    async create(data: PrivateChatRequest.Create) {
        return this.json<PrivateChatResponse.Create>({method: 'post', data})
    }

    async update(data: PrivateChatRequest.Update) {
        return this.json<PrivateChatResponse.Update>({method: 'patch', data})
    }

    async getOne(data: PrivateChatRequest.GetOne) {
        return this.json<PrivateChatResponse.GetOne>({method: 'get', url: `/${data.interlocutorId}/${data.userId}`})
    }

    async delete(data: PrivateChatRequest.Delete) {
        return this.json<PrivateChatResponse.Delete>({method: 'delete', url: `/${data.id}`})
    }
}

const privateChatAPI = new PrivateChatAPI({url: 'private-chat'})

export default privateChatAPI