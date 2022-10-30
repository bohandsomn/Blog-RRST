import RequestNotifier from '@/packages/request-notifier'
import Notification from '@/packages/notification'
import friendshipsAPI from '../api'

const notification = new Notification()

const subscribers = new RequestNotifier<typeof friendshipsAPI.subscribers>({
    apiMethod: (...data) => friendshipsAPI.subscribers(...data)
})

const subscriptions = new RequestNotifier<typeof friendshipsAPI.subscriptions>({
    apiMethod: (...data) => friendshipsAPI.subscriptions(...data)
})

const friendshipsNotifier = {
    subscribers,
    subscriptions
}

export default friendshipsNotifier