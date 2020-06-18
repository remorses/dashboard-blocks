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
import { extractPathItems, dummyUrl } from './support'

export type BreadcrumbsProps = {
    items?: ReactNode[]
} & StackProps

export const Breadcrumbs = ({ items = [], ...rest }: BreadcrumbsProps) => {
    const { colorMode } = useColorMode()
    const color = { light: 'gray.600', dark: 'gray.400' }
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

export type SmartBreadcrumbsProps = { basePath?: string } & BreadcrumbsProps

export const SmartBreadcrumbs = ({
    basePath = '/',
    ...rest
}: SmartBreadcrumbsProps) => {
    const [url] = useState(typeof window == 'undefined' ? dummyUrl : location.href)
    const path = new URL(url).pathname
    const baseItems = extractPathItems(basePath)
    const items: string[] = removeBaseItems(extractPathItems(path), baseItems)

    return <Breadcrumbs items={items} {...rest} />
}

function removeBaseItems(items, baseItems) {
    return items.reduce(
        ({ index, result }, x) => {
            if (baseItems[index] == x) {
                return { index: index + 1, result }
            }
            return {
                index: index + 1,
                result: [...result, x],
            }
        },
        { index: 0, result: [] },
    ).result
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
