import { createTheme } from '@mui/material/styles'
import { primaryColor, neutralColor } from './Colors'

const Theme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
        contrastText: "white"
    },
    text: {
        primary: neutralColor
    }
  }
})

export default Theme