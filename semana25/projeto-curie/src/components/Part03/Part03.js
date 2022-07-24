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
    backgroundColor: '#33a6a6',
  }))

export const Part03 = (props) => {

    let content = {
        Portuguese: {
            title: "Habilidades",
            frontend: "React.JS (com Styled Components, hooks e context API), Material UI, Bootstrap, Figma (criação de design e seguir um design proposto na hora de desenvolver o código). Também tenho experiência em criar layouts responsivos.",
            backend: "Node.JS, MySQL, TypeScript, Jest, Amazon Web Services. Tenho também conhecimento básico em PHP."
        },
        English: {
            title: "Skills",
            frontend: "React.JS (with Styled Components, hooks and context API), Material UI, Bootstrap, Figma (design creation and following a proposed design during the code development). I'm also experienced on creating responsive layouts.",
            backend: "Node.JS, MySQL, TypeScript, Jest, Amazon Web Services. I also have basic knowledge on PHP."
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
                    Front-end
                </C.Title>
                <C.Info>
                    <C.InfoText>
                        {content.frontend}
                </C.InfoText>
                </C.Info>
            </Griddd>
            <Griddd item xs={12} md={6}>
            <C.Title>
                    Back-end
                </C.Title>
                <C.Info>
                    <C.InfoText>
                        {content.backend}
                </C.InfoText>
                </C.Info>
            </Griddd>
        </Grid>    
        </Box>
        </C.Container>
    )
}

export default Part03