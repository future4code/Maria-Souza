import * as C from './styles'
import Main from '../../assets/error.png'
import { Typography } from '@mui/material'
import { Button } from '@mui/material'
import { styled } from '@mui/material/styles'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { useNavigate } from 'react-router-dom'

const BackButton = styled(Button)(({ theme }) => ({
    '&:hover': {
        color: '#8d1c31'
    },
    color: '#bf213e',
  }))

export const ErrorPage = (props) => {
    const navigate = useNavigate()

    const goBack = () => {
        navigate("/")
    }

    let content = {
        Portuguese: {
            title: "Perdido no espaço",
            description: "Você atingiu o limite do universo.",
            view: "Erro 404"
        },
        English: {
            title: "Lost in space",
            description: "You have reached the edge of the universe.",
            view: "Error 404"
        }
    }

    props.language === "Portuguese"
    ? (content = content.Portuguese)
    : (content = content.English)

    return (
        <C.Container>
            <Typography variant="h5" component="div" gutterBottom>
                {content.title} 🚀
            </Typography>
            <C.ContainerIMG>
                <img src={Main} alt="Error 404" />
            </C.ContainerIMG>
            <C.Subtitle>
            <Typography variant="body2" component="div" gutterBottom>
                {content.description}
            </Typography>
            <Typography variant="h5" component="div" gutterBottom>
                {content.view}
            </Typography>
            </C.Subtitle>
            <BackButton onClick={goBack} startIcon={<ArrowBackIcon />}>
                Go Back
            </BackButton>
        </C.Container>
    )
}

export default ErrorPage