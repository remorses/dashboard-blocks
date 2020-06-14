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
} from '@chakra-ui/core'

export const Block = ({
    children,
    heading = '',
    headingHeight = '2em',
    ...rest
}) => {
    return (
        <Stack
            position='relative'
            m='10px'
            mt='0px'
            overflow='hidden'
            rounded='6px'
            bg='white'
            minH='200px'
            minW='200px'
            shadow='lg'
            p='20px'
            {...rest}
        >
            <Box
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
            </Box>
            <Box width='100%' mt={headingHeight}>
                {children}
            </Box>
        </Stack>
    )
}
