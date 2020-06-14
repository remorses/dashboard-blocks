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

export type BreadcrumbsProps = {
    items?: ReactNode[]
} & StackProps

export const Breadcrumbs = ({ items = [], ...rest }: BreadcrumbsProps) => {
    const { colorMode } = useColorMode()
    const color = { light: 'gray.400', dark: 'gray.600' }
    return (
        <Stack
            color={color[colorMode]}
            direction='row'
            spacing='10px'
            {...rest}
        >
            {items.map((item, i) => {
                return (
                    <Stack spacing='10px' direction='row' align='center'>
                        <Box key={i}>{item}</Box>
                        {i !== items.length - 1 && (
                            <Box size='1em' as={Divider} />
                        )}
                    </Stack>
                )
            })}
        </Stack>
    )
}

const Divider = (props) => {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={24}
            height={24}
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth={2}
            strokeLinecap='round'
            strokeLinejoin='round'
            className='feather feather-chevron-right'
            {...props}
        >
            <polyline points='9 18 15 12 9 6'></polyline>
        </svg>
    )
}
