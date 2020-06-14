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
} from '@chakra-ui/core'

export type TableProps = {
    head: ReactNode[]
    rows: ReactNode[][]
} & StackProps

export const Table = ({ head, rows, ...rest }) => {
    return (
        <Stack overflowX='auto' direction='row' {...rest}>
            <Box as='table' textAlign='left' width='full'>
                <Box as='tr'>
                    {head.map((name) => {
                        return <THead>{name}</THead>
                    })}
                </Box>
                {rows.map((row) => {
                    return (
                        <Box as='tr'>
                            {row.map((value) => {
                                return <TData>{value}</TData>
                            })}
                        </Box>
                    )
                })}
            </Box>
        </Stack>
    )
}

const THead = (props) => {
    const { colorMode } = useColorMode()
    const bg = { light: 'gray.50', dark: 'whiteAlpha.100' }
    return (
        <Box
            as='th'
            bg={bg[colorMode]}
            fontWeight='semibold'
            p={2}
            fontSize='sm'
            {...props}
        />
    )
}

const TData = (props) => (
    <Box
        as='td'
        p={2}
        borderTopWidth='1px'
        borderColor='inherit'
        fontSize='sm'
        whiteSpace='normal'
        {...props}
    />
)
