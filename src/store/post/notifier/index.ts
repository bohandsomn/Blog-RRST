import RequestNotifier from '@/packages/request-notifier'
import Notification from '@/packages/notification'
import postAPI from '../api'

const notification = new Notification()

const create = new RequestNotifier<typeof postAPI.create>({
    apiMethod: (...data) => postAPI.create(...data),
    before: () => notification.loading('Start posting'),
    narrowing: (response) => response.data !== undefined,
    success: ({ id, response }) => notification.success(id, response.message),
    reject: ({ id, response }) => notification.error(id, response.message)
})

const getMany = new RequestNotifier<typeof postAPI.getMany>({
    apiMethod: (...data) => postAPI.getMany(...data)
})

const update = new RequestNotifier<typeof postAPI.update>({
    apiMethod: (...data) => postAPI.update(...data),
    before: () => notification.loading('Post update start'),
    narrowing: (response) => response.data !== undefined,
    success: ({ id, response }) => notification.success(id, response.message),
    reject: ({ id, response }) => notification.error(id, response.message)
})

const getOne = new RequestNotifier<typeof postAPI.getOne>({
    apiMethod: (...data) => postAPI.getOne(...data)
})

const deletePost = new RequestNotifier<typeof postAPI.delete>({
    apiMethod: (...data) => postAPI.delete(...data),
    before: () => notification.loading('Post deletion start'),
    narrowing: (response) => response !== undefined,
    success: ({ id }) => notification.success(id, 'Post successfully deleted'),
    reject: ({ id, response }) => notification.error(id, response ? response.message : 'Something went wrong')
})

const postNotifier = {
    create,
    getMany,
    update,
    getOne,
    delete: deletePost,
}

export default postNotifier