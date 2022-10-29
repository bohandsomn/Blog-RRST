import { GetStaticProps, NextPage } from 'next'
import React from 'react'
import { AppHead } from '../src/layouts/head'
import PostList, { PostListBoundary, PostListProvider, postNotifier } from '../src/feature/post'
import { SecondaryContainer } from '../src/layouts/wrapper'
import Sidebar from '../src/feature/sidebar'

const Home: NextPage<Props> = ({ posts }) => {
    return (
        <AppHead title="Home">
            <Sidebar>
                <SecondaryContainer>
                    <PostListProvider posts={posts}>
                        <PostListBoundary>
                            <PostList />
                        </PostListBoundary>
                    </PostListProvider>
                </SecondaryContainer>
            </Sidebar>
        </AppHead>
    )
}

type Props = {
    posts: Awaited<ReturnType<typeof postNotifier.getMany.call>>
}

export const getStaticProps: GetStaticProps = async () => {
    const posts = await postNotifier.getMany.call({
        title: '',
        content: '',
        page: '1',
        privacy: 'PUBLIC'
    })

    return {
        props: {
            posts
        }
    }
}

export default Home