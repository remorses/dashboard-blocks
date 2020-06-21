import React, {
    useState,
    forwardRef,
    cloneElement,
    useEffect,
    FC,
    ReactNode,
} from 'react'
import {
    useColorMode,
    PseudoBox,
    Box,
    LinkProps,
    Link,
    Stack,
    StackProps,
} from '@chakra-ui/core'

export type NonIdealStateProps = {
    heading?: ReactNode
    body?: ReactNode
    icon?: ReactNode
    cta?: ReactNode
} & StackProps

export const NonIdealState = ({
    heading = '',
    icon,
    body,
    cta,
    ...rest
}: NonIdealStateProps) => {
    const { colorMode } = useColorMode()
    const bg = { light: 'white', dark: 'gray.700' }
    return (
        <Stack
            position='relative'
            overflow='hidden'
            spacing='4'
            align='center'
            rounded='6px'
            minW='200px'
            textAlign='center'
            p='20px'
            {...rest}
        >
            {icon && <Box fontSize='4em'>{icon}</Box>}
            {heading && (
                <Box fontSize='1.4em' fontWeight='600'>
                    {heading}
                </Box>
            )}
            {body && <Box maxW='600px'>{body}</Box>}
            {cta && <Box>{cta}</Box>}
        </Stack>
    )
}
