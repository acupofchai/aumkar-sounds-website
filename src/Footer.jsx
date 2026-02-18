import './Footer.css';
import { Link } from 'react-router-dom';
import { FaFacebookSquare, FaInstagram  } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Aumkar Sounds</h3>
          <p>Professional speaker rentals and setup for all your audio needs.</p>
        </div>
        
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/past-events">Past Events</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-links">
            <a href="https://www.facebook.com/people/Aumkar-Sounds/61559258110606/" target="_blank" rel="noopener noreferrer"><FaFacebookSquare/>Facebook</a>
            <a href="https://www.instagram.com/aumkarsounds/" target="_blank" rel="noopener noreferrer"><FaInstagram/>Instagram</a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2026 Aumkar Sounds. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;