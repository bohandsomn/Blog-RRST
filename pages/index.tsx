import { GetStaticProps, NextPage } from 'next'
import React from 'react'
import { AppHead } from '../src/layouts/head'
import { PostListProvider, postNotifier } from '../src/feature/post'

const Home: NextPage<Props> = ({ posts }) => {
    return (
        <AppHead title="Home">
            <PostListProvider posts={posts}>
                <div>Home page</div>
            </PostListProvider>
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