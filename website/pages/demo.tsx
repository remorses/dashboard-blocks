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

const data = [
    {
        country: 'AD',
        'hot dog': 137,
        'hot dogColor': 'hsl(130, 70%, 50%)',
        burger: 5,
        burgerColor: 'hsl(56, 70%, 50%)',
        sandwich: 8,
        sandwichColor: 'hsl(271, 70%, 50%)',
        kebab: 150,
        kebabColor: 'hsl(24, 70%, 50%)',
        fries: 196,
        friesColor: 'hsl(209, 70%, 50%)',
        donut: 93,
        donutColor: 'hsl(274, 70%, 50%)',
    },
    {
        country: 'AE',
        'hot dog': 118,
        'hot dogColor': 'hsl(253, 70%, 50%)',
        burger: 48,
        burgerColor: 'hsl(72, 70%, 50%)',
        sandwich: 103,
        sandwichColor: 'hsl(170, 70%, 50%)',
        kebab: 157,
        kebabColor: 'hsl(307, 70%, 50%)',
        fries: 155,
        friesColor: 'hsl(165, 70%, 50%)',
        donut: 7,
        donutColor: 'hsl(110, 70%, 50%)',
    },
    {
        country: 'AF',
        'hot dog': 158,
        'hot dogColor': 'hsl(343, 70%, 50%)',
        burger: 25,
        burgerColor: 'hsl(324, 70%, 50%)',
        sandwich: 162,
        sandwichColor: 'hsl(176, 70%, 50%)',
        kebab: 126,
        kebabColor: 'hsl(147, 70%, 50%)',
        fries: 94,
        friesColor: 'hsl(263, 70%, 50%)',
        donut: 50,
        donutColor: 'hsl(204, 70%, 50%)',
    },
    {
        country: 'AG',
        'hot dog': 200,
        'hot dogColor': 'hsl(150, 70%, 50%)',
        burger: 189,
        burgerColor: 'hsl(16, 70%, 50%)',
        sandwich: 13,
        sandwichColor: 'hsl(319, 70%, 50%)',
        kebab: 165,
        kebabColor: 'hsl(272, 70%, 50%)',
        fries: 93,
        friesColor: 'hsl(209, 70%, 50%)',
        donut: 167,
        donutColor: 'hsl(155, 70%, 50%)',
    },
    {
        country: 'AI',
        'hot dog': 43,
        'hot dogColor': 'hsl(200, 70%, 50%)',
        burger: 196,
        burgerColor: 'hsl(351, 70%, 50%)',
        sandwich: 152,
        sandwichColor: 'hsl(81, 70%, 50%)',
        kebab: 19,
        kebabColor: 'hsl(64, 70%, 50%)',
        fries: 68,
        friesColor: 'hsl(256, 70%, 50%)',
        donut: 18,
        donutColor: 'hsl(266, 70%, 50%)',
    },
    {
        country: 'AL',
        'hot dog': 149,
        'hot dogColor': 'hsl(264, 70%, 50%)',
        burger: 100,
        burgerColor: 'hsl(220, 70%, 50%)',
        sandwich: 100,
        sandwichColor: 'hsl(260, 70%, 50%)',
        kebab: 79,
        kebabColor: 'hsl(327, 70%, 50%)',
        fries: 196,
        friesColor: 'hsl(199, 70%, 50%)',
        donut: 47,
        donutColor: 'hsl(88, 70%, 50%)',
    },
    {
        country: 'AM',
        'hot dog': 17,
        'hot dogColor': 'hsl(354, 70%, 50%)',
        burger: 36,
        burgerColor: 'hsl(66, 70%, 50%)',
        sandwich: 17,
        sandwichColor: 'hsl(198, 70%, 50%)',
        kebab: 130,
        kebabColor: 'hsl(25, 70%, 50%)',
        fries: 196,
        friesColor: 'hsl(346, 70%, 50%)',
        donut: 167,
        donutColor: 'hsl(118, 70%, 50%)',
    },
]
