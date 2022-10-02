import authorizationAPI from '..'
import mockLogin from '../__mock__/login'

describe('login', () => {
    test('should successfully', async () => {
        jest.spyOn(authorizationAPI, 'login')
            .mockResolvedValueOnce(mockLogin.resolvedValue)

        await expect(authorizationAPI.login(mockLogin.successfull.request!))
            .resolves
            .toEqual(mockLogin.successfull.response)
    })
    
    test('should erroneously', async () => {
        jest.spyOn(authorizationAPI, 'login')
            .mockRejectedValueOnce(mockLogin.erroneously.response)

        await expect(authorizationAPI.login(mockLogin.erroneously.request!))
            .rejects
            .toEqual(mockLogin.erroneously.response)
    })
})