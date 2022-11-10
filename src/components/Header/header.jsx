import { Link } from "react-router-dom";
import Logo from '../../assets/Logo_dark.png';
import "../../styles/header.css";

function Header() {
    return (
        <header className="Header">
            <img className="Header_logo" src={Logo} alt="Logo Kasa" />
            <nav className="Header_nav">
                <Link className="Header_link" to="/">Accueil</Link>
                <Link className="Header_link" to="/about">A Propos</Link>
            </nav>
        </header>
    )
}

export default Header