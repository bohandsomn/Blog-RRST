import HandleAPI from '../../../service/api/handle-api'
import ChatRequest from './request'
import ChatResponse from './response'

class ChatAPI extends HandleAPI {
    async create(data: ChatRequest.Create) {
        return this.json<ChatResponse.Create>({method: 'post', data})
    }

    async getMany() {
        return this.json<ChatResponse.GetMany>({method: 'get'})
    }

    async update(data: ChatRequest.Update) {
        return this.json<ChatResponse.Update>({method: 'put', data})
    }

    async getOne(data: ChatRequest.GetOne) {
        return this.json<ChatResponse.GetOne>({method: 'get', url: `/${data.chatId}`})
    }

    async delete(data: ChatRequest.Delete) {
        return this.json<ChatResponse.Delete>({method: 'delete', url: `/${data.chatId}`})
    }

    async getByUserId(data: ChatRequest.GetByUserId) {
        return this.json<ChatResponse.GetByUserId>({method: 'get', url: `/user-id/${data.interlocutorId}`})
    }
}

const chatAPI = new ChatAPI({url: 'chat'})

export default chatAPI