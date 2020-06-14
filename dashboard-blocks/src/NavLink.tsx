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
} from '@chakra-ui/core'

const useIsActive = (href) => {
    const [isActive, setIsActive] = useState(false)

    useEffect(() => {
        if (formatPath(window.location.pathname) === formatPath(href)) {
            setIsActive(true)
        }
    }, [])

    return isActive
}

export const formatPath = (str) => {
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
                px='2'
                py='1'
                transition='all 0.2s'
                // fontWeight='medium'
                outline='none'
                _focus={{ shadow: 'outline' }}
                // color={color[colorMode]}
                // _notFirst={{ mt: 1 }}
                {...props}
            >
                {icon && (
                    <Flex align='center' justify='center' w='2em' h='1.6em'>
                        {icon}
                    </Flex>
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
        const activeColor = { light: 'gray.800', dark: 'gray.200' }
        const activeBg = {
            light: 'rgba(0,0,0,0.04)',
            dark: 'rgba(255,255,255,0.04)',
        }

        const activeStyles = {
            bg: activeBg[colorMode],
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
