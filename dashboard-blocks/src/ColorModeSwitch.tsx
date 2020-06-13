import React from 'react'
import { useColorMode, IconButton } from '@chakra-ui/core'

export const ColorModeSwitch = ({ ...rest }) => {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <IconButton
            variant='ghost'
            color='current'
            ml='2'
            fontSize='20px'
            aria-label={`Switch to ${
                colorMode === 'light' ? 'dark' : 'light'
            } mode`}
            onClick={toggleColorMode}
            icon={colorMode === 'light' ? 'moon' : 'sun'}
            {...rest}
        />
    )
}
