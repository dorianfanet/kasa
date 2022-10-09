import { Link } from "react-router-dom"
import logo from "../../assets/logo.svg"
import './Header.scss'

export default function Header() {
  return (
    <header className="header responsive">
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
      <nav className="header__nav">
        <Link to="/">Accueil</Link>
        <Link to="/about">À propos</Link>
      </nav>
    </header>
  )
}