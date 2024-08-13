import api from '../../services/api'
import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import './home.css'

function Home() {

    const [filmes, setFilmes] = useState([])

    useEffect(()=>{
        async function loadFilmes(){
            const response = await api.get('movie/now_playing', {
                params:{
                    api_key: "70bf37a30b8f45cfe9004cec485bc920",
                    language: "pt-BR",
                    page: 1,
                }
            })

            setFilmes(response.data.results.slice(0, 12))

        }

        loadFilmes()

    }, [])


    return (
    <div className="Home">
        {filmes.map((filme)=>{
            return(
                <div key={filme.id}>

                    <div className='conteiner_filme'>
                        <h1 className='titulo'>{filme.title}</h1>
                        <Link to={`/filme/${filme.id}`}>
                            <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title} />
                        </Link>
                        <span><Link to={`/filme/${filme.id}`}>Acessar</Link></span>
                    </div>

                </div>
        )
        })}
    </div>
    );
}

export default Home;