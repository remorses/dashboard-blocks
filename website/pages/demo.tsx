import Stack from '@chakra-ui/core/dist/Stack'
import {FiActivity, FiAlertOctagon} from 'react-icons/fi'
import {
    DashboardLayout,
    SideNavLink,
    Block,
    ColorModeSwitch,
} from 'dashboard-blocks/src'
import { cloneElement } from 'react'
import { Box, ThemeProvider, Link, Flex } from '@chakra-ui/core'
import dynamic from 'next/dynamic'
import { LandingProvider, NavBar } from 'landing-blocks/src'
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

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
        <LandingProvider bg='gray.100'>
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

                sideNavItems={addKeys([
                    <SideNavLink icon={<FiAlertOctagon />} href='/demo'>
                        User
                    </SideNavLink>,
                    <SideNavLink icon={<FiActivity/>} href=''>
                        Projects
                    </SideNavLink>,
                    <SideNavLink icon={<FiAlertOctagon/>} href=''>
                        Settings
                    </SideNavLink>,
                ])}
            >
                <Flex w='100%' direction='row'>
                    <Block heading='Chart of something' w='100%'>
                        <Chart
                            options={chartOptions}
                            series={[{ data, name: '' }]}
                            type='bar'
                        />
                    </Block>
                    <Block w='100%'>
                        <Chart
                            options={chartOptions}
                            series={[{ data: [...data].reverse() }]}
                            type='bar'
                        />
                    </Block>
                </Flex>
            </DashboardLayout>
        </LandingProvider>
    )
}

const addKeys = (elems) => {
    return elems.map((x, key) => {
        return cloneElement(x, { key })
    })
}

const data = [30, 40, 45, 50, 49, 60, 70, 91]
