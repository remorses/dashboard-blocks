import { Box, LinkProps, Stack, useColorMode } from '@chakra-ui/react'
import React, { FC, forwardRef, ReactNode, useEffect, useState } from 'react'

const useIsActive = (href) => {
    const [isActive, setIsActive] = useState(false)

    useEffect(() => {
        if (formatPath(window.location.pathname) === formatPath(href)) {
            setIsActive(true)
        }
    }, [])

    return isActive
}

const formatPath = (str) => {
    return str && str.replace(/\/index$/, '')
}

export type NavLinkProps = { icon?: ReactNode } & LinkProps

export const NavLink: FC<NavLinkProps> = forwardRef(
    ({ children, icon, ...props }: any, ref) => {
        const { colorMode } = useColorMode()
        const color = { light: 'gray.700', dark: 'whiteAlpha.700' }
        return (
            <Stack
                ref={ref}
                fontWeight='medium'
                as='a'
                direction='row'
                // mx={-2}
                display='flex'
                cursor='pointer'
                alignItems='center'
                // px='2'
                // py='1'
                transition='all 0.2s'
                // fontWeight='medium'
                outline='none'
                _focus={{ shadow: 'outline' }}
                // color={color[colorMode]}
                // _notFirst={{ mt: 1 }}
                {...props}
            >
                {icon && (
                    <Stack
                        align='stretch'
                        justify='center'
                        fontSize='1.3em'
                        // w='2em'
                        // h='2em'
                    >
                        {icon}
                    </Stack>
                )}
                <Box>{children}</Box>
            </Stack>
        )
    },
)

export const SideNavLink: FC<NavLinkProps> = forwardRef(
    ({ href, ...props }: any, ref) => {
        const { colorMode } = useColorMode()
        const isActive = useIsActive(href)
        const hoverColor = { light: 'gray.900', dark: 'whiteAlpha.900' }
        const activeColor = { light: 'black', dark: 'gray.200' }
        const idleColor = { light: 'gray.500', dark: 'gray.400' }
        // const activeBg = {
        //     light: 'gray.100',
        //     dark: 'gray.700',
        // }

        const activeStyles = {
            // bg: activeBg[colorMode],
            // color: 'black',
            // fontWeight: '600',
            rounded: 'md',
            color: activeColor[colorMode],
            // shadow: 'sm',
            // borderWidth: '1px',
            _hover: {},
        }

        return (
            <NavLink
                ref={ref}
                href={href}
                color={idleColor[colorMode]}
                // borderRadius='6px'
                overflow='hidden'
                _hover={{
                    color: hoverColor[colorMode],
                    transform: 'translateX(4px)',
                }}
                {...(isActive ? activeStyles : {})}
                {...props}
            />
        )
    },
)
