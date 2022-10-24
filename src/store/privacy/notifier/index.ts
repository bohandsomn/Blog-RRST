import RequestNotifier from '@/packages/request-notifier'
import Notification from '@/packages/notification'
import privacyAPI from '../api'

const notification = new Notification()

const create = new RequestNotifier<typeof privacyAPI.create>({
    apiMethod: (...data) => privacyAPI.create(...data),
    before: () => notification.loading('Creation of a private value has begun'),
    narrowing: (response) => response.data !== undefined,
    success: ({ id, response }) => notification.success(id, response.message),
    reject: ({ id, response }) => notification.error(id, response.message)
})

const getMany = new RequestNotifier<typeof privacyAPI.getMany>({
    apiMethod: (...data) => privacyAPI.getMany(...data),
})

const privacyNotifier = {
    create,
    getMany,
}

export default privacyNotifier