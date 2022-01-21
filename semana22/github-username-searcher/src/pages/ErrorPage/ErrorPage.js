import { Container, ContainerButton } from './Styles'
import ErrorLogo from '../../assets/error.png'
import { useHistory } from 'react-router-dom'
import Button from '@mui/material/Button'
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded'

export const ErrorPage = () => {
    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }

    return (
        <div>
        <Container>
            <img src={ErrorLogo} alt="Error 404" />
        <ContainerButton>
            <Button onClick={goBack} variant="contained" color={"secondary"} startIcon={<ArrowBackIosRoundedIcon />}>
                Go back
            </Button>
      </ContainerButton>
      </Container>
        </div>
    )
}

export default ErrorPage