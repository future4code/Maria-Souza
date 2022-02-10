import * as React from 'react'
import * as C from './styles'
import Box from '@mui/material/Box'

export const Footer = () => {
    return (
        <Box sx={{ backgroundColor: 'green'}}>
            <C.Container>
                © 2022 Maria Helena Souza (@mhsouza88)
            </C.Container>
        </Box>
    )
}

export default Footer