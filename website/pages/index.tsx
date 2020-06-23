import Stack from '@chakra-ui/core/dist/Stack'
import { AiFillApple as Icon1, AiFillApi as Icon2 } from 'react-icons/ai'
import {
    DashboardLayout,
    SideNavLink,
    Block,
    ColorModeSwitch,
    Breadcrumbs,
    BannerBlock,
    TableBlock,
} from 'dashboard-blocks/src'
import { cloneElement } from 'react'
import { Box, ThemeProvider, Flex, Image } from '@chakra-ui/core'
import {
    LandingProvider,
    NavBar,
    Footer,
    Hero,
    SectionTitle,
    Bullet,
    Button,
    FeaturesList,
    Divider,
    Section,
    Link,
} from 'landing-blocks/src'
import { ResponsiveBar } from '@nivo/bar'
import { barData as data } from '../support'
import { Logo } from './_app'
import PrismaPage from './prisma'

export default function Page({}) {
    return (
        <LandingProvider black='#555' primary='#5259CB' minH='100vh'>
            <NavBar
                logo={<Logo />}
                navs={[
                    <Link href='/docs'>Docs</Link>,
                    <Link href='/prisma'>Demo</Link>,
                ]}
            />
            <Hero
                heading='Dashboards building blocks'
                subheading='Build awesome dashboards in minutes'
                cta={
                    <a href='/docs'>
                        <Button>Quick start</Button>
                    </a>
                }
            />
            <Divider heading='modern dashboards' />
            <FeaturesList
                centerText
                features={[
                    {
                        heading: 'Composable',
                        subheading: 'Easy to compose blocks',
                    },
                    {
                        heading: 'Pretty by default',
                        subheading: 'Easy to compose blocks',
                    },
                    {
                        heading: 'Themeable',
                        subheading: 'Easy to compose blocks',
                    },
                ]}
            />

            {/* <SectionTitle
                heading='Here is an example'
                subheading='This dashboard is only 300 lines long'
            /> */}
            {/* TODO i want to change the background of LandingProvider based on colorMode, i cannot do that without adding a parent colormodeprovider */}
            <Stack
                position='relative'
                align='stretch'
                borderWidth='1px'
                py='10px'
                bg='#ECF1F3'
            >
                <Divider mt='-25px' heading={<Bullet>HERE IS A DEMO</Bullet>} />
                <PrismaPage />
            </Stack>
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
