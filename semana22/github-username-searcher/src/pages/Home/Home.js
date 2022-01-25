import React from "react"
import CardUser from "../../components/CardUser/CardUser"
import Search from "../../components/Search/Search"
import { Container, 
         CardContainer, 
         SearchContainer } from "./Styles"
import { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'

export const Home = () => {
    const global = useContext(GlobalContext)

    return (
        <Container>
            <SearchContainer>
                <Search />
            </SearchContainer>
            <CardContainer>
            {global.userData?.name ?
            <React.Fragment>
                <CardUser
                    url={global.userData?.avatar_url}
                    altText={global.userData?.login}
                    titleText={global.userData?.login}
                    nameText={global.userData?.name}
                    loginText={global.userData?.login}
                    followersText={global.userData?.followers}
                    followingText={global.userData?.following}
                    bioText={global.userData?.bio}
                    reposText={global.userData?.public_repos} />
                </React.Fragment>
                : undefined}
            </CardContainer>
        </Container>
    )
}

export default Home