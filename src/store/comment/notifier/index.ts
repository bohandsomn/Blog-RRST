import RequestNotifier from '@/packages/request-notifier'
import Notification from '@/packages/notification'
import commentAPI from '../api'

const notification = new Notification()

const create = new RequestNotifier<typeof commentAPI.create>({
    apiMethod: (...data) => commentAPI.create(...data),
    before: () => notification.loading('Start creating a comment'),
    narrowing: (response) => response.data !== undefined,
    success: ({ id, response }) => notification.success(id, response.message),
    reject: ({ id, response }) => notification.error(id, response.message)
})

const getMany = new RequestNotifier<typeof commentAPI.getMany>({
    apiMethod: (...data) => commentAPI.getMany(...data)
})

const update = new RequestNotifier<typeof commentAPI.update>({
    apiMethod: (...data) => commentAPI.update(...data),
    before: () => notification.loading('Comment update start'),
    narrowing: (response) => response.data !== undefined,
    success: ({ id, response }) => notification.success(id, response.message),
    reject: ({ id, response }) => notification.error(id, response.message)
})

const deleteComment = new RequestNotifier<typeof commentAPI.delete>({
    apiMethod: (...data) => commentAPI.delete(...data),
    before: () => notification.loading('Comment deletion start'),
    narrowing: (response) => typeof response.data === 'number',
    success: ({ id }) => notification.success(id, 'Comment successfully deleted'),
    reject: ({ id, response }) => notification.error(id, response ? response.message : 'Something went wrong')
})

const commentNotifier = {
    create,
    getMany,
    update,
    delete: deleteComment,
}

export default commentNotifier