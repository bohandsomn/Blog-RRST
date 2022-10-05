import HandleAPI from '../../../service/api/handle-api'
import FriendshipsRequest from './request'
import FriendshipsResponse from './response'

class FriendshipsAPI extends HandleAPI {
    async subscribers(data: FriendshipsRequest.Subscribers) {
        return this.json<FriendshipsResponse.Subscribers>({method: 'get', url: `/${data.userId}/subscribers`})
    }

    async subscriptions(data: FriendshipsRequest.Subscriptions) {
        return this.json<FriendshipsResponse.Subscriptions>({method: 'get', url: `/${data.userId}/subscriptions`})
    }
}

const friendshipsAPI = new FriendshipsAPI({url: 'friendships'})

export default friendshipsAPI