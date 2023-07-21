import { Link } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
        <Link to="/" className="navbar__logotype">viajar</Link>
        <ul className="navbar__list">
          <li className="navbar__item">
            <Link to="/" className="navbar__link">
              Index
            </Link>
          </li>
          <li className="navbar__item">
            <Link to="/destinations" className="navbar__link">
              Destinations
            </Link>
          </li>
        </ul>
        <button className="navbar__bookTrip">Connect with us</button>
      </nav>
    </header>
  );
};

export default Navbar;
