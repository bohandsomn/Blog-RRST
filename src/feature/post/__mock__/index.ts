import { IOptions } from '../../../components/input-list/context/Options'
import type { PostDTO, CommentDTO, LikesPostDTO, LikesCommentDTO, UserDTO } from '../utility/interface'

enum POST_ID {
    FIRST = 1,
    SECOND,
    THIRD
}
enum USER_ID {
    FIRST = 1,
    SECOND
}

const POST_MOCK_1: PostDTO = {
    id: POST_ID.FIRST,
    title: 'Title',
    content: '',
    userId: USER_ID.FIRST,
    privacyId: 1,
    createdAt: '10/10/1010',
    updatedAt: '20/10/1010'
}

const POST_MOCK_2: PostDTO = {
    id: POST_ID.SECOND,
    title: 'Title',
    content: 'small content',
    userId: USER_ID.FIRST,
    privacyId: 1,
    createdAt: '10/10/1010',
    updatedAt: '20/10/1010'
}

const POST_MOCK_3: PostDTO = {
    id: POST_ID.THIRD,
    title: 'Title',
    content: 'big content big content big content big content big content big content big content',
    userId: USER_ID.FIRST,
    privacyId: 1,
    createdAt: '10/10/1010',
    updatedAt: '20/10/1010'
}

export const commentsMock: CommentDTO[] = [
    {id: 1, userId: USER_ID.SECOND, postId: POST_ID.FIRST, content: 'contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent'},
    {id: 2, userId: USER_ID.SECOND, postId: POST_ID.FIRST, content: 'It\'s normal comment'},
]

export const postsMock: PostDTO[] = [
    POST_MOCK_1,
    POST_MOCK_2,
    POST_MOCK_3,
]

export const postLikesMock: LikesPostDTO = {
    id: 1,
    userId: USER_ID.SECOND,
    postId: POST_ID.FIRST,
    value: true
}

export const commentLikesMock: LikesCommentDTO = {
    id: 1,
    userId: USER_ID.SECOND,
    commentId: 2,
    value: null
}

export const commentatorMock: UserDTO = {
    id: USER_ID.SECOND,
    name: 'Vasya',
    surname: null,
    email: '',
    login: 'vasya',
    isActivation: true,
    birthday: null,
}

export const privacyMock: IOptions = [
    {
        id: 1,
        value: 'PUBLIC'
    },
    {
        id: 2,
        value: 'PRIVATE'
    },
    {
        id: 3,
        value: 'THIRD'
    },
    {
        id: 4,
        value: 'PROTECTED'
    },
]