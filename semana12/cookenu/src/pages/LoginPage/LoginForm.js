import React, { useState } from "react"
import { ScreenContainer, InputContainer } from "./Styled"
import TextField from '@mui/material/TextField'
import useForm from '../../hooks/useForm'
import Button from '@mui/material/Button'
import SendRoundedIcon from '@mui/icons-material/SendRounded'
import { login } from '../../services/User'
import { useHistory } from 'react-router-dom'
import useUnprotectedPage from '../../hooks/useUnprotectedPage'
import CircularProgress from '@mui/material/CircularProgress'

const LoginForm = ({setRightButtonText}) => {
    useUnprotectedPage()
    const [form, onChange, clear] = useForm({ 
        email: "", 
        password: "" 
    })
    const [isLoading, setIsLoading] = useState(false)
    const history = useHistory()

    const onSubmitForm = (event) => {
        event.preventDefault()
        login(form, clear, history, setRightButtonText, setIsLoading)
    }

    return (
        <ScreenContainer>
            <form onSubmit={onSubmitForm}>
            <InputContainer>
                <TextField 
                required
                label={"E-mail"}
                type={"email"}
                variant={"outlined"}
                name={"email"}
                value={form.email}
                onChange={onChange}
                fullWidth
                margin={"normal"}
                />

                <TextField
                required
                label="Senha" 
                type="password"
                variant="outlined"
                name={"password"}
                value={form.password}
                onChange={onChange}
                fullWidth
                margin={"normal"}
                />

            <Button
                color="primary" 
                size="large"
                variant="contained"
                type="submit"
                margin={"normal"}
                endIcon={<SendRoundedIcon />}
                >
                { isLoading ? <CircularProgress color={"inherit"} size={24}/> : <>Entrar</> }
                </Button>
            </InputContainer>
            </form>
        </ScreenContainer>
    )
}

export default LoginForm