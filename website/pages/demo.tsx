import Stack from '@chakra-ui/core/dist/Stack'
import { DashboardLayout, SideNavLink } from 'dashboard-blocks/src'
import { cloneElement } from 'react'
import { Box } from '@chakra-ui/core'

export default function Page({}) {
    return (
        <DashboardLayout
            bg='gray.100'
            sideNavItems={addKeys([
                <SideNavLink href='/demo'>User</SideNavLink>,
                <SideNavLink href=''>Projects</SideNavLink>,
                <SideNavLink href=''>Settings</SideNavLink>,
            ])}
        >
            <Box h='200px' w='300px' bg='red.100'></Box>
        </DashboardLayout>
    )
}

const addKeys = (elems) => {
    return elems.map((x, key) => {
        return cloneElement(x, { key })
    })
}
