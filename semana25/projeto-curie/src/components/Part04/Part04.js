import * as C from './styles'
import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import { Typography } from '@mui/material'

const Griddd = styled(Grid)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d97824',
  }))

export const Part04 = (props) => {

    let content = {
        Portuguese: {
            title: "Educação",
            subtitle1: "Desenvolvimento Fullstack",
            school1: "@Labenu | 2021 - 2022",
            link1: "https://www.labenu.com.br/",
            description1: "Programa com mais de 1000 horas de experiência prática em desenvolvimento Fullstack, guiadas por Metodologias Ágeis (Scrum/Kanban). Entre as habilidades aprendidas durante o curso estão JavaScript, React (com Styled Components + Hooks), REST, Jest, Node.JS, Knex, TypeScript, MySQL, AWS, Git, Firebase, e Testes Unitários.",
            subtitle2: "Desenvolvimento Fullstack",
            school2: "@Rocketseat | 2022 - 2023",
            link2: "https://www.rocketseat.com.br/",
            description2: "Plataforma que une diversas trilhas de aprendizado prático em programação, do mais básico ao mais avançado, com suporte aos alunos e correção de exercícios. Bolsa de estudos de um ano concedida pela própria instituição."
        },
        English: {
            title: "Education",
            subtitle1: "Fullstack Development",
            school1: "@Labenu | 2021 - 2022",
            link1: "https://www.labenu.com.br/",
            description1: "Immersive Bootcamp program focused on Fullstack development, guided by Agile Methodologies (Scrum/Kanban). Among the skills learned during the program are JavaScript, React (including Styled Components + Hooks), REST, Jest, Node.JS, Knex, TypeScript, MySQL, AWS, Git, Firebase, and Unit Testing.",
            subtitle2: "Fullstack Development",
            school2: "@Rocketseat | 2022 - 2023",
            link2: "https://www.rocketseat.com.br/",
            description2: "A platform that possesses several programs of practical learning in programming, from basic subjects to the most advanced ones, with total support for students and correction of their exercises during classes. One-year scholarship granted by the school itself."
        }
    }

    props.language === "Portuguese"
    ? (content = content.Portuguese)
    : (content = content.English)

    return(
        <C.Container>
        <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h4" color="white" component="div" gutterBottom sx={{textAlign: 'center', marginTop: '3rem'}}>
                {content.title}
            </Typography>
        <Grid container spacing={0}>
            <Griddd item xs={12} md={6}>
            <C.Title>
                    {content.subtitle1}
                </C.Title>
                <C.Info>
                    <C.InfoText2>
                        <a href={content.link1} rel="noreferrer" target="_blank">{content.school1}</a>
                    </C.InfoText2>
                    <C.InfoText>
                        {content.description1}
                </C.InfoText>
                </C.Info>
            </Griddd>
            <Griddd item xs={12} md={6}>
            <C.Title>
                    {content.subtitle2}
                </C.Title>
                <C.Info>
                <C.InfoText2>
                        <a href={content.link2} rel="noreferrer" target="_blank">{content.school2}</a>
                    </C.InfoText2>                    
                    <C.InfoText>
                        {content.description2}
                </C.InfoText>
                </C.Info>
            </Griddd>
        </Grid>    
        </Box>
        </C.Container>
    )
}

export default Part04