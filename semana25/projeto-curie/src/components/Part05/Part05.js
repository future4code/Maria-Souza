import * as C from './styles'
import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import { Typography } from '@mui/material'
import Project01 from '../../assets/project01.png'
import Project02 from '../../assets/project02.png'
import Button from '@mui/material/Button'

const StyledButton = styled(Button)(({ theme }) => ({
    '&:hover': {
        backgroundColor: '#8d1c31'
    },
    backgroundColor: '#bf213e',
    color: '#FFFFFF'
  }))

const Griddd = styled(Grid)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
  }))

export const Part05 = (props) => {

    let content = {
        Portuguese: {
            title: "Projetos",
            project1: "LabeX",
            description1: "O LabeX é um site fictício de viagens espaciais, onde o usuário pode se candidatar a uma viagem existente na lista e também pode criar a sua própria. Para visualizar os candidatos de uma determinada viagem é necessário fazer o login para ter acesso ao painel administrativo. Clique no botão abaixo para ver o código e a documentação no GitHub e o deploy da aplicação*.",
            buttonLink: "GitHub + Deploy",
            warning: "* README e deploy disponíveis apenas em PT-BR.",
            project2: "FutureEats",
            description2: "O FutureEats é uma aplicação web baseada no UberEats, um aplicativo de celular onde o usuário pode escolher um restaurante disponível em sua localização e realizar um pedido. O design desse projeto foi feito com base na visualização em dispositivos móveis, não possuindo um layout para versão desktop. Clique no botão abaixo para ver o código e a documentação no GitHub e o deploy da aplicação*.",
            seeRepos: "Mais projetos"
        },
        English: {
            title: "Projects",
            project1: "LabeX",
            description1: "LabeX is a fictional space travel website where a user can apply for a trip. Plus, they can also create a personalized trip for themselves. To view candidates from a chosen trip, it is necessary to log in to access the administrative panel. Click on the button below to see the code and documentation on GitHub and the application deployment link*.",
            buttonLink: "GitHub + Deploy",
            warning: "* README and deploy available only in PT-BR.",
            project2: "FutureEats",
            description2: "FutureEats is an application based on UberEats, a mobile application where a user can choose a restaurant available in their location and place an order. The design of this project was based on mobile devices only, and it doesn't have a proper layout for a desktop version. Click the button below to see the code and documentation on GitHub and the application deployment link*.",
            seeRepos: "More projects"
        }
    }

    props.language === "Portuguese"
    ? (content = content.Portuguese)
    : (content = content.English)

    return(
        <C.Container>
        <Box sx={{ flexGrow: 1 }}>
            <Typography id="projects" variant="h4" color="white" component="div" sx={{textAlign: 'center', marginTop: '3rem', marginBottom: '2rem', color: '#45525b'}}>
                {content.title}
            </Typography>
        <Grid container spacing={0}>
            <Griddd item xs={12} md={6}>
                <C.ProjectImage>
                    <img src={Project01} alt="01" />
                </C.ProjectImage>
                <C.Title>
                    {content.project1}
                </C.Title>
                <C.Info>
                    <C.InfoText>
                        {content.description1}
                        <br />
                        <br />
                        {content.warning}
                </C.InfoText>
                </C.Info>
                <C.ButtonAlign>
                <StyledButton href="https://github.com/mhsouza88/labex" target="_blank" variant="contained">
                    {content.buttonLink}
                </StyledButton>
                </C.ButtonAlign>
            </Griddd>
            <Griddd item xs={12} md={6}>
            <C.ProjectImage>
                    <img src={Project02} alt="02" />
                </C.ProjectImage>
                <C.Title>
                    {content.project2}
                </C.Title>
                <C.Info>
                    <C.InfoText>
                        {content.description2}
                        <br />
                        <br />
                        {content.warning}
                </C.InfoText>
                </C.Info>
                <C.ButtonAlign>
                <StyledButton href="https://github.com/mhsouza88/future-eats" target="_blank" variant="contained">
                    {content.buttonLink}
                </StyledButton>
                </C.ButtonAlign>
            </Griddd>
        </Grid>
        <C.AlignRepositories>
            <hr />
        <StyledButton href="https://github.com/mhsouza88?tab=repositories" target="_blank" variant="contained" size="large">
                    {content.seeRepos}
                </StyledButton>
            </C.AlignRepositories> 
        </Box>
        </C.Container>
    )
}

export default Part05