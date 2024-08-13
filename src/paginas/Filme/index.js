import './filme.css'
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from '../../services/api'
import {toast} from 'react-toastify'

function Filme() {

    const { id } = useParams();
    const [filme, setFilme] = useState([])
    const navigate = useNavigate()

    function salvar_filme(){
        const listaFilme = localStorage.getItem("@cineflix")
        let filmesSalvos = JSON.parse(listaFilme) || []
        const hasFilme = filmesSalvos.some((filmeSalvo) => filmeSalvo.id === filme.id)

        if (hasFilme){
            toast.warn("Filme já está na lista")
            return
        }
        else{
            filmesSalvos.push(filme)
            localStorage.setItem("@cineflix", JSON.stringify(filmesSalvos))
            toast.success("Filme salvo com sucesso")
        }
        
    }

    useEffect(()=>{

        async function loadFilme(){
            await api.get(`/movie/${id}`,{
                params:{
                    api_key: "70bf37a30b8f45cfe9004cec485bc920",
                    language: "pt-BR",
                }
            })
            .then((response)=>{
                setFilme(response.data)
            })
            .catch(()=>{
                navigate('/', {replace:true})
            })
        }

        loadFilme()

    },[])

    return (
        <div className='filme_info'>
            <div className='conteiner_principal'>
                <h1>{filme.title}</h1>

                <div className='img_conteiner'>
                    <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title} />
                </div>

                <h3>Sinópse:</h3>
                <p className='sinopse'>{filme.overview}</p>
                <span className='nota'>Nota IMDB: {filme.vote_average}/10</span>

                <div className='buttons'>
                    <button onClick={salvar_filme}>Salvar</button>

                    <button>
                        <a target='blank' href={`https://youtube.com.br/results?search_query=${filme.title} trailer`}>Trailer</a>
                    </button>

                </div>
            </div>
        </div>
    );
}

export default Filme;