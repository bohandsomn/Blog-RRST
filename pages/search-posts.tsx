import { GetServerSideProps, NextPage } from 'next'
import React from 'react'
import { AppHead } from '../src/layouts/head'
import { SearchPosts, PostResponse, postNotifier, SearchPostsProvider, Pagination } from '../src/feature/search-post'
import { ErrorResponse } from '../src/utility/type'
import { MainContainer, SecondaryContainer } from '../src/layouts/wrapper'
import Sidebar from '../src/feature/sidebar'
import { Div } from '@/components/atoms'
import useAppStyles from '../src/hooks/useAppStyles'

const SearchPostsPage: NextPage<Props> = ({ posts }) => {
    const className = useAppStyles('children/margin-bottom-10')
    return (
        <AppHead title="Search Posts">
            <SearchPostsProvider posts={posts}>
                <Div className={className}>
                    <Sidebar>
                        <SecondaryContainer>
                            <SearchPosts />
                        </SecondaryContainer>
                    </Sidebar>
                    <MainContainer>
                        <Pagination />
                    </MainContainer>
                </Div>
            </SearchPostsProvider>
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