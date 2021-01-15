import { ChakraProvider, DarkMode, LightMode } from '@chakra-ui/react'
import React from 'react'

// console.log(require.resolve('@chakra-ui/react'))

export function Wrapper({ children, isDark }) {
    // console.log(dark ? 'dark' : 'light')
    return <ChakraProvider >{children}</ChakraProvider>
}
