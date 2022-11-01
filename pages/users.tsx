import { GetServerSideProps, NextPage } from 'next'
import React from 'react'
import { Div } from '@/components/atoms'
import { AppHead } from '../src/layouts/head'
import { MainContainer, SecondaryContainer } from '../src/layouts/wrapper'
import UserData, { userNotifier, UserResponse, UserDataProvider } from '../src/feature/user-data'
import Sidebar from '../src/feature/sidebar'
import { PostCreator } from '../src/feature/post-creator'
import PostList, { PostListBoundary, PostListProvider, postNotifier, PostResponse } from '../src/feature/post'
import { ErrorResponse } from '../src/utility/type'
import useAppStyles from '../src/hooks/useAppStyles'
import useAppSelector from '../src/hooks/useAppSelector'
import { authorizationSelector } from '../src/store'

const Users: NextPage<Props> = ({ user, posts }) => {
    const className = useAppStyles('children/margin-bottom-10')
    const authorization = useAppSelector(authorizationSelector)
    const isMatch = authorization.data?.id === user.id
    return (
        <AppHead title="Users">
            <UserDataProvider user={user}>
                <MainContainer>
                    <Sidebar>
                        <SecondaryContainer>
                            <Div className={className}>
                                <UserData />
                                <PostListProvider posts={posts}>
                                    <PostListBoundary>
                                        {isMatch && <PostCreator />}
                                        <PostList />
                                    </PostListBoundary>
                                </PostListProvider>
                            </Div>
                        </SecondaryContainer>
                    </Sidebar>
                </MainContainer>
            </UserDataProvider>
        </AppHead>
    )
}

type Props = {
    user: UserResponse.UserDTO
    posts: ErrorResponse | PostResponse.GetMany
}

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
    const { id } = context.query
    if (typeof id !== 'string') {
        return {
            notFound: true
        }
    }

    const user = await userNotifier.getOne.call({
        userId: id
    })

    if (user.data === undefined) {
        return {
            notFound: true
        }
    }

    const posts = await postNotifier.getManyByUserId.call({userId: id})

    return {
        props: {
            user: user.data,
            posts
        }
    }
}

export default Users