import type { PostDTO, CommentDTO, LikesPostDTO, LikesCommentDTO, UserDTO } from '../utility/interface'

const POST_ID_1 = 1
const USER_ID_1 = 1
const USER_ID_2 = 2

const POST_MOCK_1: PostDTO = {
    id: POST_ID_1,
    title: 'Title',
    content: 'contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent',
    userId: USER_ID_1,
    privacyId: 1,
    createdAt: '10/10/1010',
    updatedAt: '20/10/1010'
}

export const commentsMock: CommentDTO[] = [
    {id: 1, userId: USER_ID_2, postId: POST_ID_1, content: 'contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent'},
    {id: 2, userId: USER_ID_2, postId: POST_ID_1, content: 'It\'s normal comment'},
]

export const postsMock: PostDTO[] = [
    POST_MOCK_1,
    POST_MOCK_1,
    POST_MOCK_1,
]

export const postLikesMock: LikesPostDTO = {
    id: 1,
    userId: USER_ID_2,
    postId: POST_ID_1,
    value: true
}

export const commentLikesMock: LikesCommentDTO = {
    id: 1,
    userId: USER_ID_2,
    commentId: 2,
    value: null
}

export const commentatorMock: UserDTO = {
    id: USER_ID_2,
    name: 'Vasya',
    surname: null,
    email: '',
    login: 'vasya',
    isActivation: true,
    birthday: null,
}