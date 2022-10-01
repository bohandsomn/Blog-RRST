import HandleAPI from '../../../service/handle-api'
import CommentRequest from './request'
import CommentResponse from './response'

class CommentAPI extends HandleAPI {
    async create(data: CommentRequest.Create) {
        return this.json<CommentResponse.Create>({method: 'post', data})
    }

    async getMany(data: CommentRequest.GetMany) {
        return this.json<CommentResponse.GetMany>({method: 'get', url: `/${data.postId}`})
    }

    async update(data: CommentRequest.Update) {
        return this.json<CommentResponse.Update>({method: 'put', data})
    }

    async delete(data: CommentRequest.Delete) {
        return this.json<CommentResponse.Delete>({method: 'delete', url: `/${data.commentId}`})
    }
}

const commentAPI = new CommentAPI({url: 'comment'})

export default commentAPI