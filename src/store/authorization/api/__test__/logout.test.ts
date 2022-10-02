import authorizationAPI from '..'
import mockLogin from '../__mock__/logout'

describe('logout', () => {
    test('should successfully', async () => {
        jest.spyOn(authorizationAPI, 'logout')
            .mockResolvedValueOnce()

        await expect(authorizationAPI.logout())
            .resolves
            .toEqual(undefined)
    })
    
    test('should erroneously', async () => {
        jest.spyOn(authorizationAPI, 'logout')
            .mockRejectedValueOnce(mockLogin.erroneously.response)

        await expect(authorizationAPI.logout())
            .rejects
            .toEqual(mockLogin.erroneously.response)
    })
})