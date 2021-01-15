import { DashboardLayout, AlertBlock } from '.'
import React from 'react'

import { Button, DarkMode } from '@chakra-ui/core'

;`
## AlertBlock

A block to notify the user of something, useful in case of an error or a special event

Below there is an example of an error message
`

export const Simple = () => (
    <DashboardLayout p='6'>
        <AlertBlock
            status='warning'
            heading='You still have to verify your email'
            body='We sent you an email with a link you can click'
        />
    </DashboardLayout>
)

export const Error = () => (
    <DashboardLayout p='6'>
        <AlertBlock
            status='error'
            heading='Oops'
            body='We sent you an email with a link you can click'
        />
    </DashboardLayout>
)
