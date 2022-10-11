import { Link, useMatch, useResolvedPath  } from "react-router-dom"
import logo from "../../assets/logo.svg"
import './Header.scss';

export default function Header() {
  return (
    <header className="header responsive">
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
      <nav className="header__nav">
        <CustomLink to="/">Accueil</CustomLink>
        <CustomLink to="/about">À propos</CustomLink>
      </nav>
    </header>
  )
}

function CustomLink({ to, children }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <Link to={to} className={isActive ? 'active' : ''}>
      {children}
    </Link>
  )
}