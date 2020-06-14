import { css, Global } from '@emotion/core'
import { SideNavLink } from './NavLink'
import React, { ReactNode, useMemo, Children, cloneElement } from 'react'
import {
    Stack,
    Box,
    ITheme,
    theme as chakraTheme,
    CSSReset,
    StackProps,
} from '@chakra-ui/core'
import { PropagatedThemeProvider } from './support'
import merge from 'lodash/fp/merge'

export type DashboardLayoutProps = {
    sideNavItems?: ReactNode[]
    pageWidth?: any
    primary?: string
    children?: any
} & StackProps

export interface ThemeExtension extends ITheme {
    colors: {
        primary: string
        secondary: string
        black: string
        white: string
    } & ITheme['colors']
    sizes: {
        pageContainer: any
    } & ITheme['sizes']
    fontSizes: {
        text: any
        heading: any
        subheading: any
        subtext: any
    } & ITheme['fontSizes']
}

export function DashboardLayout({
    sideNavItems = [],
    pageWidth = '1200px',
    primary = 'green',
    children,
    // background = 'gray.100',
    ...rest
}: DashboardLayoutProps) {
    const theme = useMemo(
        () =>
            merge(chakraTheme, {
                colors: {
                    primary,
                },
                sizes: {
                    pageWidth,
                },
            }),
        [pageWidth, primary],
    )
    return (
        <PropagatedThemeProvider theme={theme}>
            <Global styles={globalStyles} />
            <CSSReset />
            <Stack
                // bg='gray.100'
                // minHeight='100%'
                align='center'
                // color={bodyColor[colorMode]}
                // fontSize={fontSize}
                fontWeight='normal'
                // fontFamily='Roboto, Arial'
                // color={colorMode == 'dark' ? 'white' : black}
                {...rest}
            >
                <Stack
                    direction='row'
                    // minHeight='100%'
                    spacing='20px'
                    position='relative'
                    w='100%'
                    maxWidth={pageWidth}
                    // px='20px' // TODO add px as landing blocks
                >
                    {sideNavItems && !!sideNavItems.length && (
                        <SideNav
                            h='100%'
                            // maxW='200px'
                            items={sideNavItems}
                            alignSelf='flex-start'
                            // position='fixed'
                            // left={0}
                            width='260px'
                            display={['none', null, 'block']}
                            overflowY='auto'
                            overflowX='hidden'
                        />
                    )}
                    <Stack
                        w='100%'
                        direction='row'
                        h='100%'
                        // ml={['none', null, SIDENAV_W + 10]}
                        // mr={['none', null, TABLE_OF_C_W + 30 + 'px']}
                    >
                        <Stack
                            overflow='auto'
                            // px={['10px', null, '20px', '30px']}
                            flex='1'
                            minHeight='100%'
                            minW='100%'
                        >
                            {children}
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
        </PropagatedThemeProvider>
    )
}

export function SideNav({ items, ...rest }) {
    return (
        <Stack spacing='20px' {...rest}>
            {addKeys(items).map((x) => {
                return x
            })}
        </Stack>
    )
}

const globalStyles = css`
    * {
        box-sizing: border-box;
    }
    html {
        overflow: hidden;
        min-height: 100%;
        /* height: 100%; */
        scroll-behavior: smooth;
    }
    #__next {
        min-height: 100vh !important;
        /* height: 100%; */
    }
    body {
        min-height: 100%;
        /* height: 100%; */
        overflow: auto;
        overflow-x: hidden;
        scroll-behavior: smooth;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-rendering: optimizeLegibility;
    }
    /* 
    html,
    body {
        margin: 0;

        padding: 0;

        min-width: 100%;
        width: 100%;
        max-width: 100%;

        min-height: 100%;
        height: 100%;
        max-height: 100%;
    } */
`

const addKeys = (elems) => {
    return elems.map((x, key) => {
        return cloneElement(x, { key })
    })
}
