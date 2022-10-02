import authorizationAPI from '..'
import mockRegistration from '../__mock__/registration'

describe('registration', () => {
    test('should successfully', async () => {
        jest.spyOn(authorizationAPI, 'registration')
            .mockResolvedValueOnce(mockRegistration.resolvedValue)

        await expect(authorizationAPI.registration(mockRegistration.successfull.request!))
            .resolves
            .toEqual(mockRegistration.successfull.response)
    })
    
    test('should erroneously', async () => {
        jest.spyOn(authorizationAPI, 'registration')
            .mockRejectedValueOnce(mockRegistration.erroneously.response)

        await expect(authorizationAPI.registration(mockRegistration.erroneously.request!))
            .rejects
            .toEqual(mockRegistration.erroneously.response)
    })
})