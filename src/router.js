import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Header'
import Home from './paginas/Home'
import Favoritos from './paginas/Favoritos'
import Filme from './paginas/Filme'
import Erro from './paginas/Erro'

function RoutesApp() {
    return (
        <BrowserRouter>
            <Header></Header>
            <Routes>
                <Route path="/" element={ <Home/> }/>
                <Route path="/filme/:id" element={ <Filme/> }/>
                <Route path="/favoritos" element={ <Favoritos/> }/>

                <Route path="*" element={ <Erro/> }/>
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesApp;