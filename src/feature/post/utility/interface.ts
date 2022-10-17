import type PostRequest from '../../../store/post/api/request'
import type PostResponse from '../../../store/post/api/response'
import type CommentResponse from '../../../store/comment/api/response'
import type CommentRequest from '../../../store/comment/api/request'
import type LikesPostResponse from '../../../store/likes-post/api/response'
import type LikesCommentResponse from '../../../store/likes-comment/api/response'
import type LikesPostRequest from '../../../store/likes-post/api/request'
import type LikesCommentRequest from '../../../store/likes-comment/api/request'
import type UserResponse from '../../../store/user/api/response'

export type PostDTO = PostResponse.PostDTO
export type CommentDTO = CommentResponse.CommentDTO
export type LikesPostDTO = Omit<LikesPostResponse.LikesPostDTO, 'value'> & {value: boolean | null}
export type LikesCommentDTO = Omit<LikesCommentResponse.LikesCommentDTO, 'value'> & {value: boolean | null}
export type UserDTO = UserResponse.UserDTO
export type { 
    PostRequest,
    CommentRequest,
    LikesPostRequest,
    LikesCommentRequest 
}