
import { useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import './favoritos.css'
import {toast} from 'react-toastify'

function Favoritos() {

    const [filmes, setFilmes] = useState([])
    
    useEffect(()=>{
        const lista = localStorage.getItem("@cineflix")
        setFilmes(JSON.parse(lista) || [])
    
    }, [])

    function excluirFilme(id){
        let filtroFilmes = filmes.filter( (item) => {
            return (item.id !== id)
        })
        setFilmes(filtroFilmes)
        localStorage.setItem("@cineflix", JSON.stringify(filtroFilmes))
        toast.success(`Filme excluído com sucesso`)

    }
    

    return (
        <div className='background'>
            <div className='favoritos'>

                <h1>Meus filmes</h1>
                <ul>
                    {filmes.map((filme)=>{
                        return(

                            <li key={filme.id}>
                                <span>{filme.title}</span>

                                <div className='botoes'>
                                    <button onClick={ () => excluirFilme(filme.id) }>Excluir</button>
                                    <button><Link to={`/filme/${filme.id}`}>Acessar</Link></button>
                                </div>
                            </li>
                        )
                    })
                    }
                </ul>
            </div>
        </div>
    );
}

export default Favoritos;

// recuperar lista de filmes do local storage e passar para uma useState
// mostrar no navegador
// criar botão de excluir e acessar
// remover do localstorage
// atualizar a lista