/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const HeaderNav = () => {

  //const [active, setActive] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/react-hooks">Hooks |</Link>
      <ul className="navbar-nav mr-auto">
        <NavLink className="nav-link" to="/react-hooks/hook-rules">Hooks Rules</NavLink>
        <NavLink className="nav-link" to="/react-hooks/use-state">useState</NavLink>
        <NavLink className="nav-link" to="/react-hooks/use-effect">useEffect</NavLink>
        <NavLink className="nav-link" to="/react-hooks/use-context">useContext</NavLink>
        <NavLink className="nav-link" to="/react-hooks/use-effect-exercises">useEffect Exercises</NavLink>
        <NavLink className="nav-link" to="/react-hooks/star-wars-planets">StarWars Planets</NavLink>
      </ul>
    </nav>
  )
}

export default HeaderNav;
