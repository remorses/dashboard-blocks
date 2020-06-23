import { Box, Image, Avatar } from '@chakra-ui/core'
import NextLink from 'next/link'
import { ResponsiveBar } from '@nivo/bar'
import {
    BannerBlock,
    Block,
    Breadcrumbs,
    DashboardLayout,
    SideNavLink,
    TableBlock,
    TextWithIcon,
} from 'dashboard-blocks/src'
import { LandingProvider, NavBar, Stack, Link } from 'landing-blocks/src'
import { AiFillApi as Icon2, AiFillApple as Icon1 } from 'react-icons/ai'
import Logo from '../../public/prisma/Logo.svg'
import SettingsIcon from '../../public/prisma/SettingsIcon.svg'
import InfoIcon from '../../public/prisma/InfoIcon.svg'

import ServicesIcon from '../../public/prisma/ServicesIcon.svg'
import ServerIcon from '../../public/prisma/ServersIcon.svg'
import GearIcon from '../../public/prisma/GearIcon.svg'
import { barData as data } from '../../support'
import { Faded } from 'baby-i-am-faded'

const BG = '#ECF1F3'

export default function Page({}) {
    return (
        <LandingProvider
            fontWeight='500'
            bg={BG}
            black='#555'
            primary='#5259CB'
            minH='100vh'
        >
            <NavBar
                logo={<Box size='10' as={Logo} />}
                navs={[
                    <Link href='/docs'>Docs</Link>,
                    <Link href='/info'>Info</Link>,
                    <Avatar name='Morse' size='sm' />,
                ]}
            />

            <DashboardLayout
                // pt='40px'
                sideNavItems={[
                    <NextLink href='/prisma'>
                        <SideNavLink
                            icon={<Box size='1em' as={ServicesIcon} />}
                        >
                            Services
                        </SideNavLink>
                    </NextLink>,
                    <NextLink href='/prisma/servers'>
                        <SideNavLink icon={<Box size='1em' as={ServerIcon} />}>
                            Servers
                        </SideNavLink>
                    </NextLink>,
                    <SideNavLink
                        href='/prisma/settings'
                        icon={<Box size='1em' as={SettingsIcon} />}
                    >
                        Settings
                    </SideNavLink>,
                ]}
            >
                <Stack direction='row' align='center'>
                    <TextWithIcon
                        fontSize='1.2em'
                        fontWeight='medium'
                        // fontSize=
                        // icon={<Box as={ServicesIcon} size='1.4em' />}
                    >
                        Your Services
                    </TextWithIcon>
                    <Box minW='4' flex='1' />
                    <a href=''>
                        <TextWithIcon
                            opacity={0.8}
                            icon={<Box as={InfoIcon} size='1.4em' />}
                        >
                            How to deploy a new service?
                        </TextWithIcon>
                    </a>
                </Stack>
                <TableBlock
                    fontSize='16px'
                    head={[
                        'service',
                        'server',
                        'status',
                        'requests',
                        '',
                    ].map((x) => x.toUpperCase())}
                    rows={[
                        [
                            'demo',
                            'prisma-eq1',

                            <TextWithIcon
                                icon={
                                    <Box
                                        size='.5em'
                                        bg='green.400'
                                        rounded='100%'
                                    />
                                }
                            >
                                Healthy
                            </TextWithIcon>,
                            0,
                            <Link href='#'>
                                <Box opacity={0.5} as={GearIcon} size='1em' />
                            </Link>,
                        ],
                    ]}
                />
            </DashboardLayout>
        </LandingProvider>
    )
}

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
