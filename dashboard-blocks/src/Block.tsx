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

export type BlockProps = {
    headingHeight?: any
    // heading?: ReactNode
} & StackProps

export const Block = ({
    children,
    // heading = '',
    headingHeight = '2em',
    ...rest
}: BlockProps) => {
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
            minH='200px'
            minW='200px'
            shadow='lg'
            p='20px'
            {...rest}
        >
            {/* <Box
                position='absolute'
                top='10px'
                left='0'
                right='0'
                px='20px'
                opacity={1}
                h={headingHeight}
                fontWeight='medium'
                w='100%'
                isTruncated
            >
                {heading}
            </Box> */}

            {children}
            {/* <Box width='100%' mt={headingHeight}>
                {children}
            </Box> */}
        </Stack>
    )
}
