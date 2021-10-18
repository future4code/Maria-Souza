import React, { useEffect, useState } from 'react'
import { useProtectedPage } from '../components/Hooks/useProtectedPage'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded'
import TripCardDetails from '../components/Cards/TripCardDetails'
import Candidates from '../pages/Candidates'
import { Container, ContainerButtons, ContainerTrips, ContainerCabecalho } from '../components/Styles/StyleTripDetailsPage'
import Buttons from '../components/Styles/Buttons'
import CandidateLogo from '../imgs/candidates.png'

export const TripDetailsPage = () => {
    const [trip, setTrip] = useState()
    const params = useParams()

    useProtectedPage()

    const history = useHistory()
    const goBack = () => {
        history.goBack()
    }

    const getTripDetails = () => {
        axios
        .get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/maria-souza-maryam/trip/${params.tripId}`, {
            headers: {
                'Content-Type': 'application/json',
                auth: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImhUYjlZd0pGZnA1bmtOMU5RVU43IiwiZW1haWwiOiJhc3Ryb2RldkBnbWFpbC5jb20uYnIiLCJpYXQiOjE2MzQyMTQ1NjV9._1s5hkHP3n98zImoZkSI__4kOKhe7zGBcHveUbFi7NY'
            }
        })
        .then((res) => {
            setTrip(res.data.trip)
        })
        .catch((err) => {
            window.alert("Ocorreu um erro! Tente novamente.")
        })
    }

    useEffect(() =>{
        getTripDetails()
    }, [])

    return (        
    <Container>
        
       <ContainerCabecalho>
      </ContainerCabecalho>

      <ContainerTrips>
            {
                trip ? <div align="center"><TripCardDetails trip={trip}/> 
                <ContainerCabecalho>
                <img src={CandidateLogo} alt="Candidatos" />
                </ContainerCabecalho>
                 <Candidates candidates={trip.candidates} /></div> 
                : <div>Só um momento...</div>
            }
      </ContainerTrips>

      <ContainerButtons>
        <Buttons
          variant="contained"
          size="large"
          onClick={goBack}
          endIcon={<ArrowBackRoundedIcon />}>
          Voltar
        </Buttons>
      </ContainerButtons>

    </Container>
    )
}

export default TripDetailsPage