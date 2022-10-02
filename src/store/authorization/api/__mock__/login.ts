import MockData from '../../../../service/mock-data'
import AuthorizationRequest from '../request'
import AuthorizationResponse from '../response'

const mockLogin = new MockData<AuthorizationRequest.Login, AuthorizationResponse.Login['data']>()
    .setSuccessfullRequest({
        login: 'login',
        password: 'password',
    })
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

export default mockLogin