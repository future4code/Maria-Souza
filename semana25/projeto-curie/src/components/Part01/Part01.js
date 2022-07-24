import * as C from './styles'
import Photo from '../../assets/photo.png'
import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import InstagramIcon from '@mui/icons-material/Instagram'
import GitHubIcon from '@mui/icons-material/GitHub'
import IconButton from '@mui/material/IconButton'
import TypeAnimation from 'react-type-animation'
import Code from '../../assets/code.svg'

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

export const Part01 = (props) => {

    let content = {
        Portuguese: {
            title: "Oi! Eu sou a Maria.",
            subtitle: "Desenvolvedora Fullstack"
        },
        English: {
            title: "Hi! I'm Maria.",
            subtitle: "Fullstack Developer"
        }
    }

    props.language === "Portuguese"
    ? (content = content.Portuguese)
    : (content = content.English)

    return(
        <C.Container>
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={0}>
            <Griddd item xs={5} md={4}>
            <img src={Photo} alt="" width={'100%'} height={'auto'} />
            </Griddd>
            <Griddd item xs={6} md={7}>
                <C.Title>
                <TypeAnimation
                    cursor={true}
                    sequence={[
                    `${content.title}`,
                    2000
                    ]}
                    wrapper="a"
                    repeat={1}
                />
                </C.Title>
                <C.SubTitle>
                    {content.subtitle}
                </C.SubTitle>
                <C.SubTitle2>
                    <img src={Code} alt="Code" />
                </C.SubTitle2>
            </Griddd>
            <Griddd item xs={1} md={1}>
                <C.SocialMedia>
                    <SocialIcons href="https://www.linkedin.com/in/mhsouza88/" target="_blank">
                        <LinkedInIcon fontSize="medium" />
                    </SocialIcons>
                    <SocialIcons href="https://github.com/mhsouza88" target="_blank">
                        <GitHubIcon fontSize="medium" />
                    </SocialIcons>
                    <SocialIcons href="https://www.instagram.com/mhsouza88/" target="_blank">
                        <InstagramIcon fontSize="medium" />
                    </SocialIcons>
                </C.SocialMedia>
            </Griddd>
        </Grid>        
        </Box>
        </C.Container>
    )
}

export default Part01