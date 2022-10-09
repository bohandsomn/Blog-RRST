import { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'
import { Body } from '../src/layouts/body'

const Document: React.FC = () => {
    return (
        <Html>
            <Head />
            <Body>
                <Main />
                <NextScript />
            </Body>
        </Html>
    )
}

export default Document