import * as React from 'react'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import Paper from '@mui/material/Paper'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded'
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded'
import { styled } from '@mui/material/styles'

const IconsAtBottom = styled(BottomNavigationAction)(({ theme }) => ({
  '&.Mui-selected, &.css-18gz5c0-MuiButtonBase-root-MuiBottomNavigationAction-root': {
    color: '#FFFFFF'
  }
}))

export default function Footer() {
  const [value, setValue] = React.useState(0)
  const ref = React.useRef(null)
    
  return (
    <Box sx={{ pb: 7 }} ref={ref} >
      <CssBaseline />
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          sx={{backgroundColor: '#482880'}}
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue)
          }}
        >
          <IconsAtBottom sx={{ color: '#FFFFFF' }} href="http://www.facebook.com" target="_blank" label="@LabeX" icon={<FacebookOutlinedIcon />} />
          <IconsAtBottom sx={{ color: '#FFFFFF' }} label="R. João Augusto, 27 - Rio de Janeiro" icon={<HomeRoundedIcon />} />
          <IconsAtBottom sx={{ color: '#FFFFFF' }} label="(21) 34568-2134" icon={<LocalPhoneRoundedIcon />} />
        </BottomNavigation>
      </Paper>
    </Box>
  )
}