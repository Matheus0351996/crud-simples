import { BrowserRouter, Route, Routes } from "react-router-dom"
import Alunos from "../Pages/Alunos/alunos"
import PaginaInicial from "../Pages/PaginaInicial/paginaInicial"
import Sobre from "../Pages/Sobre/sobre"

const Router = () => {
    return(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<PaginaInicial />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/alunos" element ={<Alunos />} />
        </Routes>
    </BrowserRouter>
    )
}
export default Router