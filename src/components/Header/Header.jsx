import { Link, useMatch, useResolvedPath } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { Logo } from '../Logo'
import "./Header.scss";

export default function Header() {
  return (
    <header className="header responsive">
      <Link to="/" className="header__logo">
        <Logo />
      </Link>
      <nav className="header__nav">
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/about">À propos</NavLink>
      </nav>
    </header>
  );
}

function NavLink({ to, children }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <Link
      to={to}
      className={isActive ? "active" : ""}
    >
      {children}
    </Link>
  );
}
