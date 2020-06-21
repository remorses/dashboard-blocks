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

export type TextWithIconProps = {
    children?: ReactNode | ReactNode[]
    icon?: ReactNode
} & StackProps

export const TextWithIcon = ({
    icon = '',
    children,
    ...rest
}: TextWithIconProps) => {
    const { colorMode } = useColorMode()
    const bg = { light: 'white', dark: 'gray.700' }
    return (
        <Stack spacing='0.6em' direction='row' align='center' justify='flex-start' {...rest}>
            {icon && <Box>{icon}</Box>}
            <Box>{children}</Box>
        </Stack>
    )
}
