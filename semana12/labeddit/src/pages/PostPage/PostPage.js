import React from "react"
import useProtectedPage from '../../hooks/useProtectedPage'
import { useParams } from 'react-router-dom'
import useRequestData from '../../hooks/useRequestData'
import { BASE_URL } from '../../constants/Urls'
import { ScreenContainer, Container } from "./Styled"
import Typography from '@mui/material/Typography'
import Loading from '../../components/Loading/Loading'
import { Button } from "@mui/material"
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded'
import { useHistory } from "react-router"
import { convertDate } from '../../constants/ConvertDate'
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded'
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded'
import CommentPost from '../../components/CommentPost/CommentPost'


const PostPage = () => {
    useProtectedPage()
    const params = useParams()
    const postDetail = useRequestData([], `${BASE_URL}/posts/${params.id}/comments`)[0]
    const history = useHistory()

    const goBack = () => {
        history.goBack()
  }

    return (
        <ScreenContainer>
           {postDetail ?
            <Container>
                <Typography 
                color={'primary'} 
                variant={'h5'} 
                align={'center'}>
                    {postDetail && <CommentPost />}
            </Typography>
            <Typography align={"justify"} marginTop={"1rem"}>
                {postDetail.body}
            </Typography>
            <Typography align={"justify"} marginTop={"1rem"}>
                Comentado por u/{postDetail.username} ● {convertDate(postDetail.createdAt)}
            </Typography>
            <Button
                color="primary"
                size="small"
                endIcon={<ArrowUpwardRoundedIcon />}
                >
                    Upvote
            
            </Button>
            <Button
                color="primary"
                size="small"
                endIcon={<ArrowDownwardRoundedIcon />}
                >
                    Downvote
            
            </Button>
            
            <Button
                color="primary" 
                size="large"
                variant="contained"
                sx={{ marginTop: '1rem', width: '7rem', alignSelf: 'center'}}
                onClick={goBack}
                endIcon={<ArrowBackRoundedIcon />}
            >
                Voltar
            </Button>
            </Container>
            : <Loading />}
        </ScreenContainer>
    )
}

export default PostPage