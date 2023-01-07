import { goToAlunos, goToPaginaInicial, goToSobre } from "../Routes/coordinator"
import { useNavigate } from "react-router-dom"

const Menu = () => {
    const navigate = useNavigate();
    return(
        <div>
            <button onClick={()=>goToPaginaInicial(navigate)}>Pagina inicial</button>
            <button onClick={()=>goToAlunos(navigate)}>Alunos</button>
            <button onClick={()=>goToSobre(navigate)}>Sobre</button>
        </div>
    )
}
export default Menu