import { Box, Stack, StackProps, useColorMode } from '@chakra-ui/react'
import React, { ReactNode } from 'react'

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
        <Stack
            spacing='0.6em'
            direction='row'
            align='center'
            justify='flex-start'
            {...rest}
        >
            {icon && <Box>{icon}</Box>}
            <Box>{children}</Box>
        </Stack>
    )
}
