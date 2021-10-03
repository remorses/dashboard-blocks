import { DokzProvider, GithubLink, ColorModeSwitch } from 'dokz/dist'
import React, { Fragment } from 'react'
import Head from 'next/head'
import { Box, ChakraProvider } from '@chakra-ui/react'
import { Faded } from 'baby-i-am-faded'

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
            <ChakraProvider resetCSS>
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
            </ChakraProvider>
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
