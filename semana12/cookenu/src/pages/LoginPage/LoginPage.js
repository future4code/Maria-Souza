import React from "react"
import { ScreenContainer, ButtonContainer, AlignLogo } from "./Styled"
import Button from '@mui/material/Button'
import LoginForm from "./LoginForm"
import LoginLogo from '../../assets/login.png'
import { useHistory } from 'react-router-dom'
import { goToSignUp } from '../../routes/Coordinator'

const LoginPage = ({setRightButtonText}) => {
    const history = useHistory()
    return (
        <ScreenContainer>
            <AlignLogo>
            <img src={LoginLogo} alt="Login" />
            </AlignLogo>
            <LoginForm
                        setRightButtonText={setRightButtonText}
                    />
            <ButtonContainer>
                <Button
                    onClick={() => goToSignUp(history)}
                    type={"submit"}
                    fullWidth
                    variant={"text"}
                    color={"primary"}
                    >
                        Não possui conta? Cadastre-se!
                    </Button>
            </ButtonContainer>
        </ScreenContainer>
    )
}

export default LoginPage