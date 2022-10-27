import React from 'react'
import { Form, MainButton } from '@/components/atoms'
import InputWithLabel from '@/components/input-with-label'
import { SecondaryBackground } from '../../../../layouts/wrapper'
import useAppQuery from '../../../../hooks/useAppQuery'
import useSearch from '../../hooks/useSearch'

const Search: React.FC = () => {
    const query = useAppQuery('search-post__search')
    const { handleSubmit, title, handleChangeTitle, content, handleChangeContent } = useSearch()

    return (
        <SecondaryBackground>
            <Form query={query} onSubmit={handleSubmit}>
                <InputWithLabel 
                    label="Enter title" 
                    value={title}
                    onChange={handleChangeTitle}
                />
                <InputWithLabel 
                    label="Enter content" 
                    value={content}
                    onChange={handleChangeContent}
                />
                <MainButton onClick={handleSubmit}>Search</MainButton>
            </Form>
        </SecondaryBackground>
    )
}

export default Search