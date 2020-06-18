import { Box, useColorMode, Stack } from '@chakra-ui/core'
import React, { ReactNode } from 'react'
import { Block, BlockProps } from './Block'

export type BannerProps = {
    heading?: ReactNode
    subheading?: ReactNode
    cta?: ReactNode
    image?: ReactNode
} & BlockProps

export const BannerBlock = ({
    heading = '',
    subheading = '',
    cta = '',
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
                <Box>{cta}</Box>
            </Stack>
            <Box flex='1' />
            {image && <Stack>{image}</Stack>}
        </Block>
    )
}
