import React from 'react'
import { Div } from '@/components/atoms'
import { PostList, PostListBoundary } from '..'
import Search from '../search'
import useAppStyles from 'src/hooks/useAppStyles'

const SearchPosts: React.FC = () => {
    const className = useAppStyles('children/margin-bottom-10')
    return (
        <Div className={className}>
            <Search />
            <PostListBoundary>
                <PostList />
            </PostListBoundary>
        </Div>
    )
}

export default SearchPosts