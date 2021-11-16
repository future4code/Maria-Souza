import React , { useState } from 'react'
import Router from './routes/Router'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
import Header from './components/Header/Header'
import theme from './constants/Theme'

const App = () => {
  const token = localStorage.getItem("token")
  const [rigthButtonText, setRightButtonText] = useState(token ? "Logout" : "Login")

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header 
          rigthButtonText={rigthButtonText}
          setRightButtonText={setRightButtonText}/>
        <Router
          setRightButtonText={setRightButtonText}
        />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
