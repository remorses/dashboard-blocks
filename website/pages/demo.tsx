import Stack from '@chakra-ui/core/dist/Stack'
import { DashboardLayout, SideNavLink } from 'dashboard-blocks/src'
import { cloneElement } from 'react'

export default function Page({}) {
    return (
        <DashboardLayout
            bg='#000'
            sideNavItems={addKeys([
                <SideNavLink href='/demo'>User</SideNavLink>,
                <SideNavLink href=''>Projects</SideNavLink>,
                <SideNavLink href=''>Settings</SideNavLink>,
            ])}
        >
            ciao
        </DashboardLayout>
    )
}

const addKeys = (elems) => {
    return elems.map((x, key) => {
        return cloneElement(x, { key })
    })
}
