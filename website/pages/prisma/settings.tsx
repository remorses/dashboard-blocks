import { Box, Image, Avatar, Input, Divider } from '@chakra-ui/react'

import { ResponsiveBar } from '@nivo/bar'
import {
    BannerBlock,
    Block,
    Breadcrumbs,
    DashboardLayout,
    SideNavLink,
    TableBlock,
    TextWithIcon,
    AlertBlock,
} from 'dashboard-blocks/src'
import {
    LandingProvider,
    NavBar,
    Stack,
    Link,
    Button,
} from 'landing-blocks/src'
import { AiFillApi as Icon2, AiFillApple as Icon1 } from 'react-icons/ai'
import Logo from '../../public/prisma/Logo.svg'
import SettingsIcon from '../../public/prisma/SettingsIcon.svg'
import FolderIcon from '../../public/prisma/FolderIcon.svg'
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
            primary='#00B66D'
            minH='100vh'
        >
            <NavBar
                logo={<Box boxSize='10' as={Logo} />}
                navs={[
                    <Link href='/docs'>Docs</Link>,
                    <Link href='/info'>Info</Link>,
                    <Avatar name='Morse' size='sm' />,
                ]}
            />

            <DashboardLayout
                // pt='40px'
                spacing='12'
                sideNavItems={[
                    <SideNavLink
                        icon={<Box boxSize='1em' as={ServicesIcon} />}
                        href='/prisma'
                    >
                        Services
                    </SideNavLink>,
                    <SideNavLink
                        icon={<Box boxSize='1em' as={ServerIcon} />}
                        href='/prisma/servers'
                    >
                        Servers
                    </SideNavLink>,
                    <SideNavLink
                        href='/prisma/settings'
                        icon={<Box boxSize='1em' as={SettingsIcon} />}
                    >
                        Settings
                    </SideNavLink>,
                ]}
            >
                <AlertBlock
                    status='warning'
                    heading='You still have to verify your email'
                    body='We sent you an email with a link you can click'
                />
                <Stack spacing='6' align='stretch'>
                    <TextWithIcon
                        fontWeight='medium'
                        icon={<Box as={FolderIcon} size='1.4em' />}
                    >
                        Workspaces
                    </TextWithIcon>
                    <Block px='10' spacing='10'>
                        <Stack spacing='2'>
                            <Box>Workspace name</Box>
                            <Input defaultValue='Tommaso De Rossi' />
                        </Stack>
                        <Stack spacing='2'>
                            <Box>Slug</Box>
                            <Input defaultValue='tommaso-de-rossi-e57302' />
                        </Stack>
                        <Stack direction='row' align='center'>
                            <Button bg='primary' size='sm'>
                                Save
                            </Button>
                            <Box flex='1' />
                            <Link fontSize='md' fontWeight='400' opacity={0.6}>
                                Delete workspace
                            </Link>
                        </Stack>
                    </Block>
                </Stack>
                <Stack spacing='6' align='stretch'>
                    <TextWithIcon
                        fontWeight='medium'
                        icon={<Box as={FolderIcon} size='1.4em' />}
                    >
                        Integrations
                    </TextWithIcon>
                    <Block px='10' spacing='6'>
                        <Box fontWeight='medium'>
                            Still no connected accounts
                        </Box>
                        <Divider />
                        <Box>
                            <Button bg='primary' size='sm'>
                                Connect Heroku account
                            </Button>
                        </Box>
                    </Block>
                </Stack>
            </DashboardLayout>
        </LandingProvider>
    )
}

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
