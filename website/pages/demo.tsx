import Stack from '@chakra-ui/core/dist/Stack'
import { FiActivity, FiAlertOctagon } from 'react-icons/fi'
import {
    DashboardLayout,
    SideNavLink,
    Block,
    ColorModeSwitch,
} from 'dashboard-blocks/src'
import { cloneElement } from 'react'
import { Box, ThemeProvider, Link, Flex } from '@chakra-ui/core'
import { LandingProvider, NavBar, Footer } from 'landing-blocks/src'
import { ResponsiveBar } from '@nivo/bar'
import { barData as data } from '../support'

export default function Page({}) {
    const chartOptions = {
        chart: {
            id: 'apexchart-example',
        },
        xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
        },
    }
    return (
        <LandingProvider minH='100vh'>
            {/* TODO i want to change the background of LandingProvider based on colorMode, i cannot do that without adding a parent colormodeprovider */}
            <NavBar
                logo={
                    <Box fontSize='30px' fontWeight='medium'>
                        dashboard blocks
                    </Box>
                }
                navs={[
                    <Link>User</Link>,
                    <Link>Logout</Link>,
                    <ColorModeSwitch />,
                ]}
            />
            <DashboardLayout
                // pt='40px'

                sideNavItems={[
                    <SideNavLink icon={<FiAlertOctagon />} href='/demo'>
                        User
                    </SideNavLink>,
                    <SideNavLink icon={<FiActivity />} href=''>
                        Projects
                    </SideNavLink>,
                    <SideNavLink icon={<FiAlertOctagon />} href=''>
                        Settings
                    </SideNavLink>,
                ]}
            >
                <Stack spacing='6' direction='row'>
                    <Block height='300px' heading='Chart of something' w='100%'>
                        <ResponsiveBar
                            data={data}
                            keys={[
                                'hot dog',
                                'burger',
                                'sandwich',
                                'kebab',
                                'fries',
                                'donut',
                            ]}
                            indexBy='country'
                            padding={0.3}
                            labelSkipWidth={12}
                            labelSkipHeight={12}
                            labelTextColor={{
                                from: 'color',
                                modifiers: [['darker', 1.6]],
                            }}
                            
                        />
                    </Block>
                </Stack>
                {/* <Block h='100px'>
                    <Box bg='gray.700' w={'100%'} height='100%' />
                </Block> */}
            </DashboardLayout>
            <Box flex='1' />
            <Footer
                columns={{
                    Product: [<Link>ciao</Link>, <Link>hello</Link>],
                    Myself: [<Link>ciao</Link>, <Link>hello</Link>],
                }}
            />
        </LandingProvider>
    )
}

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
