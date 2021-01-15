import { ThemeProvider, useTheme } from '@chakra-ui/react'
import merge from 'lodash/fp/merge'
import React, { useMemo } from 'react'

export function PropagatedThemeProvider({ theme, children }) {
    const existingTheme = useTheme()
    // console.log({ existingTheme: existingTheme.colors })
    // console.log({ new: theme.colors })
    const merged = useMemo(() => {
        return merge(existingTheme || {}, theme)
    }, [theme, existingTheme])
    return <ThemeProvider theme={merged}>{children}</ThemeProvider>
}

export function extractPathItems(path): string[] {
    return path
        .split('/')
        .map((x) => x.trim())
        .filter(Boolean)
}

export const dummyUrl = 'http://example.com'
