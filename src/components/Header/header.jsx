import { NavLink } from "react-router-dom";
import Logo from '../../assets/Logo_dark.png';
import "../../styles/header.css";

function Header() {

    const underline = {textDecoration: "underline"}

    return (
        <header className="Header">
            <img className="Header_logo" src={Logo} alt="Logo Kasa" />
            <nav className="Header_nav">
              <ul>
               <li className="Header_link"><NavLink to="/" style={({ isActive }) =>
              isActive ? underline : undefined } end>Accueil</NavLink></li>
                <li className="Header_link"><NavLink to="/about" style={({ isActive }) =>
              isActive ? underline : undefined } end>A Propos</NavLink></li>
              </ul>
            </nav>
        </header>
    )
}

export default Header