import React from "react"
import CommentsCard from "../../components/CommentsCard/CommentsCard"
import useProtectedPage from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData'
import { BASE_URL } from '../../constants/Urls'
import { Container, AlignLogo, ScreenContainer } from "./Styled"
import { useHistory } from 'react-router-dom'
import CommentPost from '../../components/CommentPost/CommentPost'
import CommentsLogo from '../../assets/comments.png'
import { useParams } from 'react-router-dom'
import { Button } from "@mui/material"
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded'


const PostPage = () => {
    const params = useParams()
    const comments = useRequestData([], `${BASE_URL}/posts/${params.id}/comments`)
    useProtectedPage()
    const history = useHistory()

    const goBack = () => {
        history.goBack()
  }

    const commentsCards = comments.map((comment) => {
        return (
            <CommentsCard
                key={comment.id}
                body={comment.body}
                userVote={comment.userVote}
                username={comment.username}
                createdAt={comment.createdAt}
                />
        )
    })

    return (
        <ScreenContainer>
        <AlignLogo>
                <CommentPost />
        </AlignLogo>
        <AlignLogo>
            <img src={CommentsLogo} alt="Comentários" />
        </AlignLogo>
        <Container>
            {commentsCards.length > 0 ? commentsCards : <>Não há comentários ainda!</>}
        <Button
                color="primary" 
                size="large"
                variant="contained"
                sx={{ margin: '1rem', width: '7rem', alignSelf: 'center'}}
                onClick={goBack}
                endIcon={<ArrowBackRoundedIcon />}
            >
                Voltar
            </Button>
            </Container>
        </ScreenContainer>
    )
}

export default PostPage