import './header.css'
import {Link} from 'react-router-dom'

function Header() {
    return (
        <header className="header">
            <h1><Link to='/'>CineFlix</Link></h1>
            <h1><Link to='/favoritos'>Favoritos</Link></h1>
        </header>
    );
}

export default Header;