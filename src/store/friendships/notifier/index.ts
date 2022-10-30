import RequestNotifier from '@/packages/request-notifier'
import Notification from '@/packages/notification'
import friendshipsAPI from '../api'

const notification = new Notification()

const subscribers = new RequestNotifier<typeof friendshipsAPI.subscribers>({
    apiMethod: (...data) => friendshipsAPI.subscribers(...data),
    before: () => notification.loading('Getting subscribers started'),
    narrowing: (response) => response.data !== undefined,
    success: ({ id, response }) => notification.success(id, response.message),
    reject: ({ id, response }) => notification.error(id, response.message)
})

const subscriptions = new RequestNotifier<typeof friendshipsAPI.subscriptions>({
    apiMethod: (...data) => friendshipsAPI.subscriptions(...data),
    before: () => notification.loading('Getting subscriptions started'),
    narrowing: (response) => response.data !== undefined,
    success: ({ id, response }) => notification.success(id, response.message),
    reject: ({ id, response }) => notification.error(id, response.message)
})

const friendshipsNotifier = {
    subscribers,
    subscriptions
}

export default friendshipsNotifier