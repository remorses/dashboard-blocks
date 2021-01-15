import { Box, Button } from '@chakra-ui/react'
import React from 'react'
import { FiAlertOctagon } from 'react-icons/fi'
import { DashboardLayout, NonIdealState } from '.'

export const Simple = () => (
    <DashboardLayout p='6'>
        <NonIdealState
            icon={<Box opacity={0.8} as={FiAlertOctagon} />}
            heading='You still have no servers'
            body='Servers are necessary to host services'
            cta={<Button size='sm'>Create a server</Button>}
        />
    </DashboardLayout>
)
