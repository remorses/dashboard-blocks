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
import { Block } from './Block'

export type TableProps = {
    head?: ReactNode[]
    heading?: ReactNode
    rows?: ReactNode[][]
} & StackProps

export const TableBlock = ({ head = [], heading = '', rows = [], ...rest }) => {
    return (
        <Block heading={heading} headingHeight='0px' p='0px' overflowX='auto' direction='row' {...rest}>
            <Box as='table' textAlign='left' width='full'>
                <Box as='tr'>
                    {head.map((name, i) => {
                        return <THead key={i}>{name}</THead>
                    })}
                </Box>
                {rows.map((row) => {
                    return (
                        <Box as='tr'>
                            {row.map((value, i) => {
                                return <TData key={i}>{value}</TData>
                            })}
                        </Box>
                    )
                })}
            </Box>
        </Block>
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
