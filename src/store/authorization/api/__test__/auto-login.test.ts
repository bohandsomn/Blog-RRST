import authorizationAPI from '..'
import mockLogin from '../__mock__/auto-login'

describe('auto login', () => {
    test('should successfully', async () => {
        jest.spyOn(authorizationAPI, 'autoLogin')
            .mockResolvedValueOnce(mockLogin.resolvedValue)

        await expect(authorizationAPI.autoLogin())
            .resolves
            .toEqual(mockLogin.successfull.response)
    })
    
    test('should erroneously', async () => {
        jest.spyOn(authorizationAPI, 'autoLogin')
            .mockRejectedValueOnce(mockLogin.erroneously.response)

        await expect(authorizationAPI.autoLogin())
            .rejects
            .toEqual(mockLogin.erroneously.response)
    })
})