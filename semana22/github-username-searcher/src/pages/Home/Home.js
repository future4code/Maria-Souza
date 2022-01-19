import CardUser from "../../components/CardUser/CardUser"
import Search from "../../components/Search/Search"
import { CardContainer, SearchContainer } from "./Styles"

export const Home = () => {
    return (
        <div>
            <SearchContainer>
                <Search />
            </SearchContainer>
            <CardContainer>
                <CardUser />
            </CardContainer>
        </div>
    )
}

export default Home