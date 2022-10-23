import HandleAPI from '../../../service/api/handle-api'
import LikesPostRequest from './request'
import LikesPostResponse from './response'

class LikesPostAPI extends HandleAPI {
    async getLike(data: LikesPostRequest.GetLike) {
        return this.json<LikesPostResponse.GetLike>({method: 'get', url: `/${data.postId}/${data.userId}`})
    }

    async like(data: LikesPostRequest.Like) {
        return this.json<LikesPostResponse.Like>({method: 'post', url: `/${data.postId}/like`})
    }

    async dislike(data: LikesPostRequest.Dislike) {
        return this.json<LikesPostResponse.Dislike>({method: 'post', url: `/${data.postId}/dislike`})
    }

    async unlike(data: LikesPostRequest.Unlike) {
        return this.json<LikesPostResponse.Unlike>({method: 'post', url: `/${data.postId}/unlike`})
    }
}

const likesPostAPI = new LikesPostAPI({url: 'likes-post'})

export default likesPostAPI