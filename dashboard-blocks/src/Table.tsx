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
import { Block, BlockProps } from './Block'

export type TableProps = {
    head?: ReactNode[]
    rows?: ReactNode[][]
} & BlockProps

export const TableBlock = ({
    head = [],
    heading = '',
    rows = [],
    ...rest
}: TableProps) => {
    return (
        <Block
            heading={heading}
            headingHeight='0px'
            p='0px'
            overflowX='auto'
            direction='row'
            {...rest}
        >
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

const cellPadding = 6

const THead = (props) => {
    const { colorMode } = useColorMode()
    const bg = { light: 'gray.50', dark: 'whiteAlpha.100' }
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

const TData = (props) => (
    <Box
        as='td'
        p={cellPadding}
        borderTopWidth='1px'
        borderColor='inherit'
        // fontSize='sm'
        whiteSpace='normal'
        {...props}
    />
)
