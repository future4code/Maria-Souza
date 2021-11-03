import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Logo from '../../imgs/logo.png'

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor: '#482880'}}>
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 2, display: { xs: '2em', sm: '2em' } }}
            >
            <a
            href="/" 
            rel="noreferrer" 
            >
            <img src={Logo}
            alt="Logotipo"
             />
             </a>
            
          </Typography>
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ flexGrow: 2, display: { xs: 'none', sm: 'block' } }}
          >
            O futuro é agora. Venha conhecer o sistema solar conosco!
            </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}