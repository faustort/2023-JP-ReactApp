import { Link, useNavigate } from "react-router-dom"


export default function PaginaInicial(){
    
    const navigate = useNavigate();
    
    return (
        <div>
            <h1>Pagina Inicial</h1>
            <Link to="/contato">Contato</Link>
            <button onClick={ () => navigate('/contato')}>Contato</button>
        </div>
    )
}