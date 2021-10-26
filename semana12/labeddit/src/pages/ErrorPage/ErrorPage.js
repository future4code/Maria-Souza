import React from "react"
import { ScreenContainer } from "./Styled"
import Typography from '@mui/material/Typography'
// import ErrorLogo from '../../assets/error.png'

const ErrorPage = () => {
    return (
        <ScreenContainer>
            {/* <img src={ErrorLogo} alt="Erro 404" /> */}
            <Typography 
                color={'primary'} 
                variant={'h4'} 
                align={'center'}>
                    Erro 404 - Página não encontrada.
            </Typography>
        </ScreenContainer>
    )
}

export default ErrorPage