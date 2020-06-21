import { Box, Image, Avatar } from '@chakra-ui/core'

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
                    <SideNavLink
                        icon={<Box size='1em' as={ServicesIcon} />}
                        href='/prisma'
                    >
                        Services
                    </SideNavLink>,
                    <SideNavLink
                        icon={<Box size='1em' as={ServerIcon} />}
                        href='/prisma/servers'
                    >
                        Servers
                    </SideNavLink>,
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
                        fontWeight='medium'
                        // fontSize=
                        icon={<Box as={ServicesIcon} size='1.4em' />}
                    >
                        Services
                    </TextWithIcon>
                    <Box flex='1' />
                    <a href=''>
                        <TextWithIcon
                            opacity={0.6}
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
                            <Stack
                                w='auto'
                                align='center'
                                spacing='2'
                                direction='row'
                                flexWrap='wrap'
                            >
                                <Box
                                    size='.5em'
                                    bg='green.400'
                                    rounded='100%'
                                />
                                <Box>Healthy</Box>
                            </Stack>,
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
