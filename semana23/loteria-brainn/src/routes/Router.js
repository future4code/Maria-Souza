import { BrowserRouter, Route, Routes} from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
import ErrorPage from '../pages/ErrorPage/ErrorPage'
import MegaSena from '../pages/MegaSena/MegaSena'
import Quina from '../pages/Quina/QuinaPage'
import LotoFacil from '../pages/LotoFacil/LotoFacil'
import LotoMania from '../pages/LotoMania/LotoMania'
import TimeMania from '../pages/TimeMania/TimeMania'
import DiaSorte from '../pages/DiaSorte/DiaSorte'

export const Router = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/megasena" element={<MegaSena />} />
            <Route path="/quina" element={<Quina />} />
            <Route path="/lotofacil" element={<LotoFacil />} />
            <Route path="/lotomania" element={<LotoMania />} />
            <Route path="/timemania" element={<TimeMania />} />
            <Route path="/diadesorte" element={<DiaSorte />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
        </BrowserRouter>
    )
}

export default Router