import Sidebar from "../../components/Sidebar/Sidebar"
import MainContent from '../../components/MainContent/MainContent'
import Home from '../../components/Home/Home'

export const HomePage = () => {
    return (
        <div>
            <Sidebar />
            <MainContent />
            <Home />
        </div>
    )
}

export default HomePage