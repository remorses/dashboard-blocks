import { DokzProvider, GithubLink, ColorModeSwitch } from 'dokz/dist'
import React, { Fragment } from 'react'
import Head from 'next/head'
import { Box } from '@chakra-ui/core'

export default function App(props) {
    const { Component, pageProps } = props
    return (
        <Fragment>
            <Head>
                <link
                    href='https://fonts.googleapis.com/css?family=Fira+Code'
                    rel='stylesheet'
                    key='google-font-Fira'
                />
            </Head>
            <DokzProvider
                headerLogo={<Logo />}
                docsRootPath='pages/docs'
                headerItems={[
                    <GithubLink
                        key='0'
                        url='https://github.com/remorses/dokz'
                    />,
                    <ColorModeSwitch key='1' />,
                ]}
                sidebarOrdering={{
                    'index.mdx': true,
                }}
            >
                <Component {...pageProps} />
            </DokzProvider>
        </Fragment>
    )
}

export const Logo = () => {
    return (
        <Box fontSize='30px' fontWeight='medium'>
            dashboard blocks
        </Box>
    )
}
