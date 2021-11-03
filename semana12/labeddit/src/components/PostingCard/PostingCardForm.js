import React, { useState } from "react"
import { ScreenContainer, InputContainer } from "./Styled"
import TextField from '@mui/material/TextField'
import useForm from '../../hooks/useForm'
import Button from '@mui/material/Button'
import { createPost } from "../../services/Post"
import CircularProgress from '@mui/material/CircularProgress'

const PostingCardForm = () => {
    const [form, onChange, clear] = useForm({ 
        title: "",
        body: ""
    })
    const [isLoading, setIsLoading] = useState(false)

    const onSubmitForm = (event) => {
        event.preventDefault()
        createPost(form, clear, setIsLoading)
    }

    return (
        <ScreenContainer>
            <form onSubmit={onSubmitForm}>
            <InputContainer>
                <TextField 
                required
                label={"Título"}
                type={"text"}
                variant={"outlined"}
                name={"title"}
                value={form.title}
                onChange={onChange}
                margin={"normal"}
                />

                <TextField 
                required
                label={"Seu post"}
                type={"text"}
                variant={"outlined"}
                name={"body"}
                value={form.body}
                onChange={onChange}
                margin={"normal"}
                multiline
                rows={"3"}
                />

            <Button
                color="primary" 
                size="large"
                variant="contained"
                type="submit"
                margin={"normal"}
                >
                { isLoading ? <CircularProgress color={"inherit"} size={24}/> : <>Postar</> }
            </Button>
            </InputContainer>
            </form>
        </ScreenContainer>
    )
}

export default PostingCardForm