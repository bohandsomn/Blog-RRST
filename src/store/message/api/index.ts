import HandleSocket from '../../../service/api/handle-socket'
import type MessageRequest from './request'
import type MessageResponse from './response'

class MessageAPI extends HandleSocket {
    joinRoom(request: MessageRequest.JoinRoom) {
        return this.json<MessageRequest.JoinRoom, MessageResponse.JoinRoom>('join-room', request)
    }

    leaveRoom(request: MessageRequest.LeaveRoom) {
        return this.json<MessageRequest.LeaveRoom, MessageResponse.LeaveRoom>('leave-room', request)
    }

    create(request: MessageRequest.Create) {
        return this.json<MessageRequest.Create, MessageResponse.Create>('message', request)
    }

    getMany(request: MessageRequest.GetMany) {
        return this.json<MessageRequest.GetMany, MessageResponse.GetMany>('get-many', request)
    }
}

const messageAPI = new MessageAPI()

export default messageAPI