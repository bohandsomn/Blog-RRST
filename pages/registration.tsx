import { NextPage } from 'next'
import React from 'react'
import { AppHead } from '../src/layouts/head'
import Registration from '../src/feature/authentication/components/registration'

const RegistrationPage: NextPage = () => {
    return (
        <AppHead title="Registration">
            <Registration />
        </AppHead>
    )
}

export default RegistrationPage