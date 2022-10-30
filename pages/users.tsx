import { GetServerSideProps, NextPage } from 'next'
import React from 'react'
import { AppHead } from '../src/layouts/head'
import { MainContainer, SecondaryContainer } from '../src/layouts/wrapper'
import UserData, { userNotifier, UserResponse, UserDataProvider } from '../src/feature/user-data'
import Sidebar from '../src/feature/sidebar'

const Users: NextPage<Props> = ({ user }) => {
    return (
        <AppHead title="Users">
            <UserDataProvider user={user}>
                <MainContainer>
                    <Sidebar>
                        <SecondaryContainer>
                            <UserData />
                        </SecondaryContainer>
                    </Sidebar>
                </MainContainer>
            </UserDataProvider>
        </AppHead>
    )
}

type Props = {
    user: UserResponse.UserDTO
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

    return {
        props: {
            user: user.data
        }
    }
}

export default Users