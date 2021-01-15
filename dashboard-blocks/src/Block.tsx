import { Box, Stack, StackProps, useColorMode } from '@chakra-ui/react'
import React, { ReactNode } from 'react'

export type BlockProps = {
    headingHeight?: any
    heading?: ReactNode
} & StackProps

export const Block = ({
    children,
    heading = '',
    headingHeight,
    ...rest
}: BlockProps) => {
    headingHeight = heading ? '2.4em' : '20px'
    const { colorMode } = useColorMode()
    const bg = { light: 'white', dark: 'gray.700' }
    return (
        <Stack
            position='relative'
            // m='10px'
            // mt='0px'
            overflow='hidden'
            rounded='6px'
            bg={bg[colorMode]}
            // minH='200px'
            minW='200px'
            shadow='md'
            p='20px'
            pt={headingHeight}
            {...rest}
        >
            <Box
                position='absolute'
                top='0px'
                pt={heading ? '10px' : '0px'}
                left='0'
                right='0'
                px='20px'
                opacity={1}
                h={headingHeight}
                fontWeight='medium'
                w='100%'
                isTruncated
                m={0}
            >
                {heading}
            </Box>

            {children}
        </Stack>
    )
}
