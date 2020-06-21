import { Avatar, Box, Divider, Input } from '@chakra-ui/core'
import {
    Block,
    DashboardLayout,
    SideNavLink,
    TextWithIcon,
    NonIdealState,
} from 'dashboard-blocks/src'
import {
    Button,
    LandingProvider,
    Link,
    NavBar,
    Stack,
} from 'landing-blocks/src'
import { FiSearch, FiAlertOctagon } from 'react-icons/fi'
import FolderIcon from '../../public/prisma/FolderIcon.svg'
import Logo from '../../public/prisma/Logo.svg'
import ServerIcon from '../../public/prisma/ServersIcon.svg'
import ServicesIcon from '../../public/prisma/ServicesIcon.svg'
import SettingsIcon from '../../public/prisma/SettingsIcon.svg'

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
                logo={<Box size='10' as={Logo} />}
                navs={[
                    <Link href='/docs'>Docs</Link>,
                    <Link href='/info'>Info</Link>,
                    <Avatar name='Morse' size='sm' />,
                ]}
            />

            <DashboardLayout
                // pt='40px'
                spacing='10'
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
                <TextWithIcon
                    fontWeight='medium'
                    icon={<Box as={ServerIcon} size='1.4em' />}
                >
                    Servers
                </TextWithIcon>
                <NonIdealState
                    icon={<Box as={FiAlertOctagon} />}
                    heading='You still have no servers'
                    body='Servers are necessary to host services'
                    cta={<Button size='sm'>Create a server</Button>}
                />
            </DashboardLayout>
        </LandingProvider>
    )
}

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
