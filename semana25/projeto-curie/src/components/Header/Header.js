import React from "react"
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import PersonIcon from '@mui/icons-material/Person'
import CodeIcon from '@mui/icons-material/Code'
import MailIcon from '@mui/icons-material/Mail'
import IconButton from '@mui/material/IconButton'
import TranslateIcon from '@mui/icons-material/Translate'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'

const settings = ['Portuguese', 'English']

export const Header = (props) => {
  const [anchorElUser, setAnchorElUser] = React.useState(null)

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  let content = {
    Portuguese: {
        about: "Sobre",
        projects: "Projetos",
        contact: "Contato"
    },
    English: {
        about: "About",
        projects: "Projects",
        contact: "Contact"    }
}

  props.language === "Portuguese"
  ? (content = content.Portuguese)
  : (content = content.English)

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#FFFFFF' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: '#8d1c31' }}>
            @MHSOUZA88
          </Typography>
          <IconButton href="#about" sx={{ color: '#8d1c31', display: { xs: 'block', sm: 'block', md: 'block', lg: 'none' } }}>
            <PersonIcon />
          </IconButton>
          <Button href="#about" sx={{ color: '#8d1c31', display: { xs: 'none', lg: 'block', xl: 'none' } }}>{content.about}</Button>
          <IconButton href="#projects" sx={{ color: '#063447', display: { xs: 'block', sm: 'block', md: 'block', lg: 'none' } }}>
            <CodeIcon />
          </IconButton>
          <Button href="#projects" sx={{ color: '#063447', display: { xs: 'none', lg: 'block', xl: 'none' } }}>{content.projects}</Button>
          <IconButton href="#contact" sx={{ color: '#063447', display: { xs: 'block', sm: 'block', md: 'block', lg: 'none' } }}>
            <MailIcon />
          </IconButton>
          <Button href="#contact" sx={{ color: '#063447', display: { xs: 'none', lg: 'block', xl: 'none' } }}>{content.contact}</Button>
          <TranslateIcon onClick={handleOpenUserMenu} sx={{ p: 0, color: '#8d1c31', cursor: 'pointer' }} />
          <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
              value={props.language}
              onChange={e => props.handleSetLanguage(e.target.value)}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={() => {
                  handleCloseUserMenu()
                  props.handleSetLanguage(setting)
                }}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
              </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header