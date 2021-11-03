import React from "react"
import { ScreenContainer, AlignLogo } from "./Styled"
import SignUpForm from "./SignUpForm"
import SignUpLogo from '../../assets/signup.png'
import useUnprotectedPage from '../../hooks/useUnprotectedPage'

const SignUpPage = ({setRightButtonText}) => {
    useUnprotectedPage()
    return (
        <ScreenContainer>
            <AlignLogo>
            <img src={SignUpLogo} alt="Cadastre-se" />
            </AlignLogo>
            <SignUpForm
                setRightButtonText={setRightButtonText}
            />
        </ScreenContainer>
    )
}

export default SignUpPage