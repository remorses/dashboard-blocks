import { DashboardLayout, BannerBlock } from '.'
import React from 'react'
import { Image, Box } from '@chakra-ui/react'

export const Simple = () => (
    <DashboardLayout p='6'>
        <BannerBlock
            heading='Setup Dashboard Blocks'
            image={<Image h='160px' w='100px' bg='lightgreen' src='/3946760.svg' />}
            subheading={
                <Box>
                    Let's create your first project<br></br> Follow me to learn
                    more
                    <br></br>
                </Box>
            }
        />
    </DashboardLayout>
)
