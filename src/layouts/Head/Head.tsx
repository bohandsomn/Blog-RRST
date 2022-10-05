import Head from 'next/head'
import React from 'react'

export const AppHead: React.FC<Props> = ({ children, title='', description='', robots='', keywords='', hrefLang='en' }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="robots" content={robots} />
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes" />
                <meta name="keywords" content={keywords} />
                <link rel="alternate" hrefLang={hrefLang} href={process.env.NEXT_PUBLIC_CLIENT_URL} />
            </Head>
            {children}
        </>
    )
}

type Props = {
    children?: any
    title?: string
    description?: string
    robots?: string
    keywords?: string
    alternate?: string
    hrefLang?: 'en' | 'uk' | 'ru'
}
