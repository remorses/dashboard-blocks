import {
    Alert,
    AlertIcon,
    AlertProps,
    Box,
    Stack,
    useColorMode,
} from '@chakra-ui/react'
import React, { ReactNode } from 'react'

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
    // console.log(colorMode)
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
