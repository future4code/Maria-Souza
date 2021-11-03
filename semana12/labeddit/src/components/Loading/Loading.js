import React from "react"
import Loader from '../../assets/loader.gif'
import { LoadingContainer } from './Styled'

const Loading = () => {
    return (
        <LoadingContainer>
            <img src={Loader} alt="Carregando" />
        </LoadingContainer>
    )
}

export default Loading