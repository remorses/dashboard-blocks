import { useTheme, ThemeProvider } from '@chakra-ui/core'
import React, { useMemo } from 'react'
import merge from 'lodash/fp/merge'

export function PropagatedThemeProvider({ theme, children }) {
    const existingTheme = useTheme()
    // console.log({ existingTheme: existingTheme.sizes })
    const merged = useMemo(() => {
        return merge(existingTheme || {}, theme)
    }, [theme, existingTheme])
    return <ThemeProvider theme={merged}>{children}</ThemeProvider>
}
