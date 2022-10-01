import HandleAPI from '../../../service/handle-api'
import PostRequest from './request'
import PostResponse from './response'

class PostAPI extends HandleAPI {
    async create(data: PostRequest.Create) {
        return this.json<PostResponse.Create>({method: 'post', data})
    }

    async getMany(data: PostRequest.GetMany) {
        return this.json<PostResponse.GetMany>({method: 'get', url: `/?title=${data.title}&content=${data.content}&privacy=${data.privacy}&page=${data.page}`})
    }

    async update(data: PostRequest.Update) {
        return this.json<PostResponse.Update>({method: 'put', data})
    }

    async getOne(data: PostRequest.GetOne) {
        return this.json<PostResponse.GetOne>({method: 'get', url: `/${data.postId}`})
    }

    async delete(data: PostRequest.Delete) {
        return this.json<PostResponse.Delete>({method: 'delete', url: `/${data.postId}`})
    }
}

const postAPI = new PostAPI({url: 'post'})

export default postAPI