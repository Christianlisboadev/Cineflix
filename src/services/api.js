import axios from 'axios'

//base da URL: https://api.themoviedb.org/3/
//URL da API: movie/now_playing?api_key=70bf37a30b8f45cfe9004cec485bc920&language=pt-BR

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})


export default api;