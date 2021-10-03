import { Box, Stack } from '@chakra-ui/react'
import {
    Bullet,
    Button,
    Divider,
    FeaturesList,
    Footer,
    Hero,
    LandingProvider,
    Link,
    NavBar,
} from 'landing-blocks/src'
import PrismaPage from './prisma'
import { Logo } from './_app'

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
