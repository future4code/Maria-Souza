import * as React from 'react'
import { LoadingContainer } from './Styled'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'

const Loading = () => {
    return (
        <LoadingContainer>
            <Box sx={{ display: 'flex' }}>
                <CircularProgress sx={{ color: '#212f7f', variant: "indeterminate"}} />
            </Box>
        </LoadingContainer>
    )
}

export default Loading