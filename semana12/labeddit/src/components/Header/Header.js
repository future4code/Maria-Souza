import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { goToLogin } from '../../routes/Coordinator'
import { useHistory } from 'react-router-dom'
import { LogoMenu } from '../../components/Header/Styled'
import Logo from '../../assets/logo.png'

const Header = ({rigthButtonText, setRightButtonText}) => {
  const token = localStorage.getItem("token") 
  const history = useHistory()

  const logout = () => {
    localStorage.removeItem("token")
  }

  const rightButtonAction = () => {
    if (token) {
      logout()
      setRightButtonText("Login")
      goToLogin(history)
    } else {
      goToLogin(history)
    }
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <a
            href="/" 
            rel="noreferrer" 
            >
            <LogoMenu 
            src={Logo}
            alt="Logotipo"
             />
             </a>
          </Typography>
          <Button 
            color="inherit" 
            size="large"
            onClick={rightButtonAction}
            >
            {rigthButtonText}
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header