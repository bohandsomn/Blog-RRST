import { NextPage } from 'next'
import React from 'react'
import { AppHead } from '../src/layouts/head'
import Login from '../src/feature/authentication/components/log-in'

const LogInPage: NextPage = () => {
    return (
        <AppHead title="Log in">
            <Login />
        </AppHead>
    )
}

export default LogInPage