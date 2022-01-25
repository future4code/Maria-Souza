import { CardContainer } from "./Styles"
import CardRepos from '../../components/CardRepos/CardRepos'
import { useContext } from "react"
import { GlobalContext } from '../../context/GlobalState'

export const Repositories = () => {
    const global = useContext(GlobalContext)
    
    return (
        <div>
            <CardContainer>
                <CardRepos
                    name={global.userData?.name} 
                    repos={global.userRepo} />
            </CardContainer>
        </div>
    )
}

export default Repositories