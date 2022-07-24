import * as C from './styles'
import React, { Fragment } from "react"
import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import { Typography } from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import InstagramIcon from '@mui/icons-material/Instagram'
import GitHubIcon from '@mui/icons-material/GitHub'
import IconButton from '@mui/material/IconButton'

const Griddd = styled(Grid)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#8d1c31',
  }))

const SocialIcons = styled(IconButton)(({ theme }) => ({
    color: 'white',
    margin: 0,
    padding: '0.2rem'
  }))

export const Part06 = (props) => {

    let content = {
        Portuguese: {
            title: "Entre em contato",
            description: "Obrigada por visitar o meu portfólio! Estou em busca de uma oportunidade para colocar minhas habilidades em prática. Se gostou dos meus projetos, por favor entre em contato."
        },
        English: {
            title: "Contact me",
            description: "Thank you for visiting my portfolio! I'm looking for an opportunity to put my skills into practice. If you enjoyed my projects, please contact me."
        }
    }

    props.language === "Portuguese"
    ? (content = content.Portuguese)
    : (content = content.English)

    return(
        <Fragment>
        <C.Container>
        <Box sx={{ flexGrow: 1 }}>
            <Typography id="contact" variant="h4" color="white" component="div" sx={{textAlign: 'center', marginTop: '3rem'}}>
                {content.title}
            </Typography>
        <Grid container spacing={0}>
            <Griddd item xs={12} md={12}>
            <C.Title>
            {content.description}
                </C.Title>
                <C.Info>
                <SocialIcons href="https://www.linkedin.com/in/mhsouza88/" target="_blank">
                        <LinkedInIcon fontSize="large" />
                    </SocialIcons>
                    <SocialIcons href="https://github.com/mhsouza88" target="_blank">
                        <GitHubIcon fontSize="large" />
                    </SocialIcons>
                    <SocialIcons href="https://www.instagram.com/mhsouza88/" target="_blank">
                        <InstagramIcon fontSize="large" />
                    </SocialIcons>
                </C.Info>
            </Griddd>
        </Grid>    
        </Box>
        </C.Container>
        </Fragment>
    )
}

export default Part06