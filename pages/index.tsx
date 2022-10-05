import { NextPage } from 'next'
import React from 'react'
import { AppHead } from '../src/layouts/Head'

const Home: NextPage = () => {
    return (
        <AppHead title="Home">
            <div>Home page</div>
        </AppHead>
    )
}

export default Home