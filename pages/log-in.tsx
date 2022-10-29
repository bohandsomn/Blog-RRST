import { NextPage } from 'next'
import React from 'react'
import { AppHead } from '../src/layouts/head'
import { LogIn } from '../src/feature/authentication'

const LogInPage: NextPage = () => {
    return (
        <AppHead title="Log in">
            <LogIn />
        </AppHead>
    )
}

export default LogInPage