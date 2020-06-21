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
    Flex,
    StackProps,
    Alert,
    AlertIcon,
    AlertProps,
} from '@chakra-ui/core'
import { Block, BlockProps } from './Block'

export type AlertBlockProps = {
    heading?: ReactNode
    body?: ReactNode
    icon?: ReactNode
} & AlertProps

export const AlertBlock = ({
    heading = '',
    icon,
    body,
    ...rest
}: AlertBlockProps) => {
    const { colorMode } = useColorMode()
    const bg = { light: 'white', dark: 'gray.700' }
    return (
        <Alert variant='left-accent' rounded='sm' shadow='none' {...rest}>
            <Stack spacing='4' direction='row'>
                {icon ? <Box fontSize='1.2em'>{icon}</Box> : <AlertIcon />}
                <Stack>
                    {heading && (
                        <Box fontSize='1em' fontWeight='600'>
                            {heading}
                        </Box>
                    )}

                    {body && <Box maxW='600px'>{body}</Box>}
                </Stack>
            </Stack>
        </Alert>
    )
}
