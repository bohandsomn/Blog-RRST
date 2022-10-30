import HandleAPI from '../../../service/api/handle-api'
import SubscribeRequest from './request'
import SubscribeResponse from './response'

class SubscribeAPI extends HandleAPI {
    async subscribe(data: SubscribeRequest.Subscribe) {
        return this.json<SubscribeResponse.Subscribe>({method: 'get', url: `/${data.subscriberId}/subscribe`})
    }

    async unsubscribe(data: SubscribeRequest.Unsubscribe) {
        return this.json<SubscribeResponse.Unsubscribe>({method: 'get', url: `/${data.subscriberId}/unsubscribe`})
    }

    async getSubscribe(data: SubscribeRequest.GetSubscribe) {
        return this.json<SubscribeResponse.GetSubscribe>({method: 'get', url: `/${data.subscriberId}`})
    }
}

const subscribeAPI = new SubscribeAPI({url: 'subscribe'})

export default subscribeAPI