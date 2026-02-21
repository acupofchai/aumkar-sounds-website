import { Link } from 'react-router-dom';
import './Navbar.css';
import { useState } from 'react';
import {GiSoundWaves} from "react-icons/gi";
import { MdEvent, MdEmail, MdOutlineSpeaker  } from "react-icons/md";
import { FaBars, FaTimes } from 'react-icons/fa';
import { IoMdHome } from 'react-icons/io';


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo"><GiSoundWaves size={40}/>Aumkar Sounds</Link>
      <button className="hamburger" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
      <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <Link to="/services" onClick={toggleMenu}><MdOutlineSpeaker size={20}/>Services</Link>
        <Link to="/past-events" onClick={toggleMenu}><MdEvent size={20}/>Past Events</Link>
        <Link to="/contact" onClick={toggleMenu}><MdEmail size={20}/>Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;