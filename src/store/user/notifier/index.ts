import RequestNotifier from '@/packages/request-notifier'
import Notification from '@/packages/notification'
import userAPI from '../api'

const notification = new Notification()

const update = new RequestNotifier<typeof userAPI.update>({
    apiMethod: (...data) => userAPI.update(...data),
    before: () => notification.loading('User update start'),
    narrowing: (response) => response.data !== undefined,
    success: ({ id, response }) => notification.success(id, response.message),
    reject: ({ id, response }) => notification.error(id, response.message)
})

const getOne = new RequestNotifier<typeof userAPI.getOne>({
    apiMethod: (...data) => userAPI.getOne(...data),
})

const userNotifier = {
    update,
    getOne,
}

export default userNotifier