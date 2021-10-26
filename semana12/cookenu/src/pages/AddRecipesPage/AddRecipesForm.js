import React, { useState } from "react"
import { ScreenContainer, InputContainer } from "./Styled"
import TextField from '@mui/material/TextField'
import useForm from '../../hooks/useForm'
import Button from '@mui/material/Button'
import SendRoundedIcon from '@mui/icons-material/SendRounded'
import { createRecipe } from "../../services/Recipe"
import CircularProgress from '@mui/material/CircularProgress'

const AddRecipesForm = () => {
    const [form, onChange, clear] = useForm({ 
        title: "",
        description: "", 
        image: "" 
    })
    const [isLoading, setIsLoading] = useState(false)

    const onSubmitForm = (event) => {
        event.preventDefault()
        createRecipe(form, clear, setIsLoading)
    }

    return (
        <ScreenContainer>
            <form onSubmit={onSubmitForm}>
            <InputContainer>
                <TextField 
                required
                label={"Nome da receita"}
                type={"text"}
                variant={"outlined"}
                name={"title"}
                value={form.title}
                onChange={onChange}
                fullWidth
                margin={"normal"}
                />

                <TextField 
                required
                label={"Modo de fazer"}
                type={"text"}
                variant={"outlined"}
                name={"description"}
                value={form.description}
                onChange={onChange}
                fullWidth
                margin={"normal"}
                />

                <TextField
                required
                label="URL da Foto" 
                type="url"
                variant="outlined"
                name={"image"}
                value={form.image}
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
                { isLoading ? <CircularProgress color={"inherit"} size={24}/> : <>Adicionar</> }
                </Button>
            </InputContainer>
            </form>
        </ScreenContainer>
    )
}

export default AddRecipesForm