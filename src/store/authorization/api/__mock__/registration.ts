import MockData from '../../../../service/mock-data'
import AuthorizationRequest from '../request'
import AuthorizationResponse from '../response'

const mockRegistration = new MockData<AuthorizationRequest.Registration, AuthorizationResponse.Registration['data']>()
    .setSuccessfullRequest({
        name: 'name',
        email: 'email',
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

export default mockRegistration