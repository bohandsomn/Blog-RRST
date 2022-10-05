import HandleAPI from '../../../service/api/handle-api'
import PrivacyRequest from './request'
import PrivacyResponse from './response'

class PrivacyAPI extends HandleAPI {
    async create(data: PrivacyRequest.Create) {
        return this.json<PrivacyResponse.Create>({method: 'post', data})
    }

    async getMany() {
        return this.json<PrivacyResponse.GetMany>({method: 'get'})
    }
}

const privacyAPI = new PrivacyAPI({url: 'privacy'})

export default privacyAPI