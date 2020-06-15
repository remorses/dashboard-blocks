import { Box, useColorMode, Stack } from '@chakra-ui/core'
import React, { ReactNode } from 'react'
import { Block, BlockProps } from './Block'

export type BannerProps = {
    heading?: ReactNode
    subheading?: ReactNode
    image?: ReactNode
} & BlockProps

export const BannerBlock = ({
    heading = '',
    subheading = '',
    image = null,
    ...rest
}: BannerProps) => {
    const bg = {
        light: 'gray.100',
        dark: 'gray.700',
    }
    const { colorMode } = useColorMode()
    return (
        <Block
            // headingHeight='20px'
            overflowX='auto'
            direction='row'
            bg={bg[colorMode]}
            shadow={null}
            fontWeight='medium'
            align='stretch'
            {...rest}
        >
            <Stack>
                <Box fontSize='2em'>{heading}</Box>
                <Box>{subheading}</Box>
            </Stack>
            <Box flex='1' />
            {image && <Stack>{image}</Stack>}
        </Block>
    )
}

const cellPadding = 6

const THead = (props) => {
    return (
        <Box
            as='th'
            // bg={bg[colorMode]}
            fontWeight='semibold'
            p={cellPadding}
            // fontSize='1.2em'
            {...props}
        />
    )
}

const TData = (props) => {
    const { colorMode } = useColorMode()
    const color = { light: 'gray.500', dark: 'white.500' }
    return (
        <Box
            as='td'
            p={cellPadding}
            borderTopWidth='1px'
            borderColor='inherit'
            color={color[colorMode]}
            // fontSize='sm'
            whiteSpace='normal'
            {...props}
        />
    )
}
