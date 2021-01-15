import { DashboardLayout, BannerBlock, TableBlock, Breadcrumbs } from '.'
import React from 'react'
import { Image, Box } from '@chakra-ui/core'

export default {
    wrapper: ({ children }) => {
        return (
            <DashboardLayout p='6' pt='20' width='100%' bg='gray.50'>
                {children}
            </DashboardLayout>
        )
    },
}

export const Simple = () => (
    <Breadcrumbs items={['User', 'Morse', 'Services']} />
)
