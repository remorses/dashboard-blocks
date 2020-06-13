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

export const Block = ({ children, ...rest }) => {
    return (
        <Stack
            m='10px'
            overflow='hidden'
            rounded='6px'
            bg='white'
            minH='200px'
            minW='200px'
            shadow='lg'
            p='20px'
            {...rest}
        >
            {children}
        </Stack>
    )
}
