import { DashboardLayout, BannerBlock, TableBlock } from '.'
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
    <TableBlock
        fontSize='16px'
        head={['Name', 'Surname', 'Age']}
        rows={[
            [
                'Fugiat in cillum qui occaecat fugiat aliqua duis ipsum anim deserunt. ',
                'Surname',
                '23',
            ],
            ['John', 'Surname', '21'],
            ['Jim', 'Surname', '23'],
        ]}
    />
)

export const ManyColumns = () => (
    <TableBlock
        fontSize='16px'
        head={[
            'Name',
            'Surname',
            'Age',
            'Name',
            'Surname',
            'Age',
            'Name',
            'Surname',
            'Age',
        ]}
        rows={[
            [
                'Fugiat in cillum qui occaecat fugiat aliqua duis ipsum anim deserunt. ',
                'Surname',
                '23',
                'Fugiat in cillum qui occaecat fugiat aliqua duis ipsum anim deserunt. ',
                'Surname',
                '23',
            ],
            [
                'John',
                'Surname',
                '21',
                'John',
                'Surname',
                '21',
                'Fugiat in cillum qui occaecat fugiat aliqua duis ipsum anim deserunt. ',
                'Surname',
                '23',
            ],
            [
                'Jim',
                'Surname',
                '23',
                'John',
                'Surname',
                '21',
                'Fugiat in cillum qui occaecat fugiat aliqua duis ipsum anim deserunt. ',
                'Surname',
                '23',
            ],
        ]}
    />
)
