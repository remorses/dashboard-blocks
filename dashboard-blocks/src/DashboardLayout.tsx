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
    Select,
} from '@chakra-ui/core'
import { PropagatedThemeProvider } from './support'
import merge from 'lodash/fp/merge'
import { Faded } from 'baby-i-am-faded'

const DEFAULT_PRIMARY = '#00B66D'
const DEFAULT_PAGE_WIDTH = '1200px'

export type DashboardLayoutProps = {
    sideNavItems?: ReactNode[]
    pageWidth?: any
    pagePadding?: any
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

Faded.defaultProps = {
    cascade: true,
}

export function DashboardLayout({
    sideNavItems = [],
    pageWidth,
    primary,
    children,
    pagePadding = '20px', // TODO inherit pagePadding from landingBlocks, checking current theme
    spacing = '6',
    // background = 'gray.100',
    ...rest
}: DashboardLayoutProps) {
    const theme = useMemo(
        () =>
            merge(chakraTheme, {
                // TODO chakra overrides the black and white color
                colors: {
                    primary: primary || DEFAULT_PRIMARY,
                },
                sizes: {
                    pageWidth: pageWidth || DEFAULT_PAGE_WIDTH, // TODO try to take pageWidth from existing theme first
                },
                space: {
                    pagePadding,
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
                spacing='8'
                align='center'
                // color={bodyColor[colorMode]}
                // fontSize={fontSize}
                fontWeight='normal'
                px='pagePadding'
                // fontFamily='Roboto, Arial'
                // color={colorMode == 'dark' ? 'white' : black}
                
                {...rest}
            >
                {sideNavItems && !!sideNavItems.length && (
                    <MobileSideNav
                        w='100%'
                        display={['flex', null, 'none']}
                        items={sideNavItems}
                    />
                )}
                <Stack
                    direction='row'
                    // minHeight='100%'
                    spacing={['20px', null, '60px']}
                    position='relative'
                    w='100%'
                    maxWidth='pageWidth'
                >
                    {sideNavItems && !!sideNavItems.length && (
                        <SideNav
                            display={['none', null, 'flex']}
                            h='100%'
                            // maxW='200px'
                            letterSpacing='0.06em'
                            // fontSize='1.1em'
                            items={sideNavItems}
                            alignSelf='flex-start'
                            // position='fixed'
                            // left={0}
                            width='260px'
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
                            overflow='visible'
                            align='stretch'
                            // px={['10px', null, '20px', '30px']}
                            spacing={spacing}
                            flex='1'
                            minHeight='100%'
                            minWidth='100%'
                            as={Faded}
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
        <Stack
            as={Faded}
            // @ts-ignore
            cascade
            spacing='6'
            {...rest}
        >
            {items.map((x, i) => {
                return <Box key={i}>{x}</Box>
            })}
        </Stack>
    )
}

export function MobileSideNav({ items, ...rest }) {
    return (
        <Stack
            h='3em'
            align='flex-start'
            direction='row'
            spacing='10'
            overflowX='auto'
            {...rest}
        >
            {items.map((x, i) => {
                return (
                    <Box
                        pb='2'
                        // borderBottomWidth='3px'
                        // borderBottomColor={'gray.600'}
                        // borderBottomStyle='solid'
                        key={i}
                    >
                        {x}
                    </Box>
                )
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
