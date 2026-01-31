import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">Aumkar Sounds</Link>
      <div className="navbar-links">
        <Link to="/services">Services</Link>
        <Link to="/past-events">Past Events</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;