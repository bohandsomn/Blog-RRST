import RequestNotifier from '@/packages/request-notifier'
import Notification from '@/packages/notification'
import subscribeAPI from '../api'

const notification = new Notification()

const subscribe = new RequestNotifier<typeof subscribeAPI.subscribe>({
    apiMethod: (...data) => subscribeAPI.subscribe(...data),
    before: () => notification.loading('subscribe request has been sent'),
    narrowing: (response) => response.data !== undefined,
    success: ({ id, response }) => notification.success(id, response.message),
    reject: ({ id, response }) => notification.error(id, response.message)
})

const unsubscribe = new RequestNotifier<typeof subscribeAPI.unsubscribe>({
    apiMethod: (...data) => subscribeAPI.unsubscribe(...data),
    before: () => notification.loading('unsubscribe request has been sent'),
    narrowing: (response) => response.data !== undefined,
    success: ({ id, response }) => notification.success(id, response.message),
    reject: ({ id, response }) => notification.error(id, response.message)
})

const getSubscribe = new RequestNotifier<typeof subscribeAPI.getSubscribe>({
    apiMethod: (...data) => subscribeAPI.getSubscribe(...data),
    before: () => notification.loading('getSubscribe request has been sent'),
    narrowing: (response) => response.data === null,
    success: ({ id, response }) => notification.success(id, response.message),
    reject: ({ id, response }) => notification.error(id, response.message)
})

const subscribeNotifier = {
    subscribe,
    unsubscribe,
    getSubscribe,
}

export default subscribeNotifier