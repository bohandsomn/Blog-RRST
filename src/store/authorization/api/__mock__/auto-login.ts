import MockData from '../../../../service/test/mock-data'
import AuthorizationRequest from '../request'
import AuthorizationResponse from '../response'

const mockAutoLogin = new MockData<AuthorizationRequest.AutoLogin, AuthorizationResponse.AutoLogin['data']>()
    .setSuccessfullRequest()
    .setSuccessfullResponseData({
        accessToken: 'string',
        user: {
            id: 1,
            name: 'name',
            surname: null,
            email: 'email',
            login: 'login',
            isActivation: false,
            birthday: null
        }
    })
    .setResolvedValueData({
        accessToken: 'string',
        user: {
            id: 1,
            name: 'name',
            surname: null,
            email: 'email',
            login: 'login',
            isActivation: false,
            birthday: null
        }
    })
    .setup()

export default mockAutoLogin