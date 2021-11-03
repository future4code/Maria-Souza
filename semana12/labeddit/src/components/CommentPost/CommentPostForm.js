import React, { useState } from "react"
import { ScreenContainer, InputContainer } from "./Styled"
import TextField from '@mui/material/TextField'
import useForm from '../../hooks/useForm'
import Button from '@mui/material/Button'
import { createComment } from "../../services/Post"
import CircularProgress from '@mui/material/CircularProgress'
import { useParams } from "react-router"

const CommentPostForm = () => {
    const [form, onChange, clear] = useForm({ 
        body: ""
    })
    const [isLoading, setIsLoading] = useState(false)
    const params = useParams()
    const id = params.id

    const onSubmitForm = (event) => {
        event.preventDefault()
        createComment(form, id, clear, setIsLoading)
    }

    return (
        <ScreenContainer>
            <form onSubmit={onSubmitForm}>
            <InputContainer>
                <TextField 
                required
                label={"Comentário"}
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

export default CommentPostForm