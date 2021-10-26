import * as React from "react"
import { ScreenContainer, InputContainer } from "./Styled"
import TextField from '@mui/material/TextField'
import useForm from '../../hooks/useForm'
import Button from '@mui/material/Button'
import SendRoundedIcon from '@mui/icons-material/SendRounded'
import { useHistory } from 'react-router-dom'
import { signUp } from "../../services/User"

const SignUpForm = (setRightButtonText) => {
    const history = useHistory()
    const [form, onChange, clear] = useForm({ 
        name: "",
        email: "", 
        password: "" 
    })

    const onSubmitForm = (event) => {
        event.preventDefault()
        signUp(form, clear, history, setRightButtonText)
    }

    return (
        <ScreenContainer>
            <form onSubmit={onSubmitForm}>
            <InputContainer>
                <TextField 
                required
                label={"Nome"}
                type={"text"}
                variant={"outlined"}
                name={"name"}
                value={form.name}
                onChange={onChange}
                fullWidth
                margin={"normal"}
                />

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
                endIcon={<SendRoundedIcon />}>
                Cadastre-se
                </Button>
            </InputContainer>
            </form>
        </ScreenContainer>
    )
}

export default SignUpForm