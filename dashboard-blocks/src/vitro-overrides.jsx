import {
    ThemeProvider,
    ColorModeProvider,
    CSSReset,
    LightMode,
    DarkMode,
} from '@chakra-ui/core'
import React from 'react'

// console.log(require.resolve('@chakra-ui/core'))

export function Wrapper({ children, dark }) {
    // console.log(dark ? 'dark' : 'light')
    const Mode = dark ? DarkMode : LightMode
    return (
        <ColorModeProvider value={dark ? 'dark' : 'light'}>
            <ThemeProvider>
                {/* <CSSReset/> */}
                {children}
            </ThemeProvider>
        </ColorModeProvider>
    )
}
