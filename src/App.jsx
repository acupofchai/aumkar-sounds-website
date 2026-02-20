import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useState } from 'react'
import './App.css'
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import Services from './Services.jsx';
import Contact from './Contact.jsx';
import PastEvents from './PastEvents.jsx';
import { useEffect } from 'react';


function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/past-events" element={<PastEvents />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

function Home() {
  return (
    <div className="hero-section">
      {/* Hero Section */}
      <section className="hero">
        <h1>Aumkar Sounds</h1>
        <h2>Professional sound rentals and setup for all your audio needs.</h2>
      </section>
      {/* About us*/}
      <section className="about">
        <h2>About us</h2>
        <div className="about-flex">
        {/* <img src="/sound waves.jpg" alt="About Aumkar Sounds" className="about-image" /> */}
        <div className="about-content">
          <p>Aumkar sounds is a family owned audio and speaker rental business
            based in the Greater Houston area. At
            Aumkar Sounds, we recognize the importance of music and sounds
            to the success of an event. Speakers have the power to bring 
            people together, and Aumkar Sounds is committed to bringing any
            event to life. Ideal for all types of 
            Backyard parties, Birthdays, Anniversaries, Quinceaneras, Karaoke etc.
          </p>
        </div>
        </div>
      </section>

      <section className="servinghouston">
        <h2>Serving Greater Houston</h2>
        <div className="serving-flex">
        {/* <img src="/sound waves.jpg" alt="About Aumkar Sounds" className="about-image" /> */}
        <div className="serving-content">
          <p>Aumkar sounds is based in the Sugar Land area and will deliver and setup equipment across Houston. 
            Some serviced areas include Sugar Land, Pearland, Katy, Texas City, Downtown Houston, Stafford,
            Missouri City, and more.
          </p>
        </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
}


export default App
