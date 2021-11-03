import React from 'react'
import CandidateCard from '../components/Cards/CandidateCard'
import { Container, ContainerCards, ContainerCabecalho } from '../components/Styles/StyleCandidates'

const Candidates = (props) => {

    return (        
        <Container>
          <ContainerCabecalho>
        </ContainerCabecalho>

        <ContainerCards>
          {props.candidates.map(candidates => {
          return <CandidateCard candidates={candidates} />
        })}
        </ContainerCards>

        </Container>
  )
}

export default Candidates