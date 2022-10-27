import { GetServerSideProps, NextPage } from 'next'
import React from 'react'
import { AppHead } from '../src/layouts/head'
import { SearchPosts, PostResponse, postNotifier, SearchPostsProvider } from '../src/feature/search-post'
import { ErrorResponse } from '../src/utility/type'
import { SecondaryContainer } from '../src/layouts/wrapper'

const SearchPostsPage: NextPage<Props> = ({ posts }) => {
    return (
        <AppHead title="Search Posts">
            <SecondaryContainer>
                <SearchPostsProvider posts={posts}>
                    <SearchPosts />
                </SearchPostsProvider>
            </SecondaryContainer>
        </AppHead>
    )
}

type Props = {
    posts: ErrorResponse | PostResponse.GetMany
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { page = '1', title = '', content = '' } = context.query

    const posts = await postNotifier.getMany.call({
        title: Array.isArray(title) ? title.join('') : title,
        content: Array.isArray(content) ? content.join('') : content,
        page: Array.isArray(page) ? page.join('') : page,
        privacy: 'PUBLIC'
    })

    return {
        props: {
            posts
        }
    }
}

export default SearchPostsPage