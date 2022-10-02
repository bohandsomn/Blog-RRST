import MockData from '../../../../service/mock-data'
import AuthorizationRequest from '../request'
import AuthorizationResponse from '../response'

const mockLogout = new MockData<AuthorizationRequest.Logout, AuthorizationResponse.Logout>()
    .setSuccessfullRequest()
    .setSuccessfullResponseData()
    .setResolvedValueData()
    .setup()

export default mockLogout