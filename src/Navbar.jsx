import { Link } from 'react-router-dom';
import './Navbar.css';
import {GiSoundWaves} from "react-icons/gi";
import { MdEvent, MdEmail, MdOutlineSpeaker  } from "react-icons/md";


function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo"><GiSoundWaves size={40}/>Aumkar Sounds</Link>
      <div className="navbar-links">
        <Link to="/services"><MdOutlineSpeaker size={20}/>Services</Link>
        <Link to="/past-events"><MdEvent size={20}/>Past Events</Link>
        <Link to="/contact"><MdEmail size={20}/>Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;