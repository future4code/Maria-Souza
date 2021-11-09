import Typography from '@mui/material/Typography'
import { Container, ContainerImg } from "./Styled"
import Error from '../../assets/error.png'

export const ErrorPage = () => {
    return (
        <Container>
            <Typography 
                color={'#212f7f'} 
                variant={'h5'} 
                sx={{ textAlign: 'center'}}
                >
                    <ContainerImg src={Error} alt="Erro 404" /><br/>
                    Erro 404<br/>
                     Página não encontrada.
            </Typography>
        </Container>
    )
}

export default ErrorPage