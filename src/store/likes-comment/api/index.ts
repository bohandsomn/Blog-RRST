import HandleAPI from '../../../service/api/handle-api'
import LikesCommentRequest from './request'
import LikesCommentResponse from './response'

class LikesCommentAPI extends HandleAPI {
    async like(data: LikesCommentRequest.Like) {
        return this.json<LikesCommentResponse.Like>({method: 'post', url: `/${data.commentId}/like`})
    }

    async dislike(data: LikesCommentRequest.Dislike) {
        return this.json<LikesCommentResponse.Dislike>({method: 'post', url: `/${data.commentId}/dislike`})
    }

    async unlike(data: LikesCommentRequest.Unlike) {
        return this.json<LikesCommentResponse.Unlike>({method: 'post', url: `/${data.commentId}/unlike`})
    }
}

const likesCommentAPI = new LikesCommentAPI({url: 'likes-comment'})

export default likesCommentAPI