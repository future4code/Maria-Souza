import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Logo from '../../assets/logo.png'
import { LogoContainer } from './Styled'

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor: '#FFFFFF'}}>
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
            <LogoContainer src={Logo}
            alt="Logotipo"
             />
             </a>
          </Typography>
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ flexGrow: 2, display: { xs: 'none', sm: 'block' }, color: '#212f7f' }}
          >
            Tarot de Marselha 🔮
            </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header