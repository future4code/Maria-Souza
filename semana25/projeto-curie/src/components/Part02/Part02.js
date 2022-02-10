import * as C from './styles'
import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import FavoriteIcon from '@mui/icons-material/Favorite'
import Side from '../../assets/side.svg'
import Button from '@mui/material/Button'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

const Griddd = styled(Grid)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#063447',
  }))

const CVButton = styled(Button)(({ theme }) => ({
    '&:hover': {
        backgroundColor: '#8d1c31'
    },
    backgroundColor: '#bf213e',
  }))

export const Part02 = (props) => {

    let content = {
        Portuguese: {
            title: "Sobre",
            description: "Desenvolvedora fullstack apaixonada por desenvolvimento web e bem-sucedida em gerenciar projetos utilizando Metodologias Ágeis. Com conhecimentos em React.JS e capacitada em conceitualizar, projetar, desenvolver e hospedar aplicações. Conhecimentos intermediários de tecnologia back-end em Node.JS e MySQL.",
            view: "LinkedIn",
            link: "https://www.linkedin.com/in/mhsouza88"
        },
        English: {
            title: "About",
            description: "Fullstack developer with a passion for web development and managing projects using Agile Methodologies. Skilled in React.JS and conceptualizing, designing, developing, and deploying software. Intermediate knowledge of back-end technology, such as Node.JS and MySQL.",
            view: "LinkedIn",
            link: "https://www.linkedin.com/in/mhsouza88/?locale=en_US"
        }
    }

    props.language === "Portuguese"
    ? (content = content.Portuguese)
    : (content = content.English)

    return(
        <C.Container>
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={0}>
            <Griddd item xs={12} md={7}>
            <C.Title id="about">
                    {content.title}
                </C.Title>
                <C.Info>
                <C.InfoText>
                    {content.description}
                </C.InfoText>
                </C.Info>
                <C.InfoText2>
                    <FavoriteIcon fontSize="x-small" sx={{ width: '0.8em', height: '0.8em'}} /> React.JS 
                    <FavoriteIcon fontSize="x-small" sx={{ width: '0.8em', height: '0.8em', marginLeft: '0.5rem'}} /> MUI 
                    <FavoriteIcon fontSize="x-small" sx={{ width: '0.8em', height: '0.8em', marginLeft: '0.5rem'}} /> MySQL 
                    <FavoriteIcon fontSize="x-small" sx={{ width: '0.8em', height: '0.8em', marginLeft: '0.5rem'}} /> Node.JS
                </C.InfoText2>
                <C.ButtonCV>
                <CVButton href={content.link} target="_blank" variant="contained" endIcon={<LinkedInIcon />}>
                    {content.view}
                </CVButton>
                </C.ButtonCV>
            </Griddd>
            <Griddd item xs={12} md={5}>
                <C.SideImage>
                    <img src={Side} alt="Imagem" />
                </C.SideImage>
            </Griddd>
        </Grid>    
        </Box>
        </C.Container>
    )
}

export default Part02