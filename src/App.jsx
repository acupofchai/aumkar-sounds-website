import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import './App.css'
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
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
        <h2>For all your audio needs.</h2>
        <h2>Professional speaker rentals and setup</h2>
      </section>
      {/* About us*/}
      <section className="about">
        <h2>About us</h2>
        <div className="about-flex">
        <img src="/sound waves.jpg" alt="About Aumkar Sounds" className="about-image" />
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
      <Footer></Footer>
    </div>
  );
}

function Services() {
  const services = [
    {
      src: "/qsc-k12.jpeg",
      caption: "QSC K12.2 speakers 2000W with stands (has Bluetooth)"
    },
    {
      src: "/qsc-k10.jpeg",
      caption: "QSC K10.2 speakers 2000W with stands (has Bluetooth)"
    },
    {
      src: "yamaha10.jpeg",
      caption: "Yamaha 10 channel mixer"
    },
    {
      src: "yamaha16.jpeg",
      caption: "Yamaha 16 channel mixer"
    },
    {
      src: "mic.jpeg",
      caption: "Shure SM58 wireless mics"
    }
  ]
  return( <div><h1>View our available equipment</h1>
   <div className="gallery-grid">
        {services.map((service, index) => (
          <div key={index} className="gallery-item">
            <img src={service.src} alt={service.caption} />
            <p className="caption">{service.caption}</p>
          </div>
        ))}
      </div>
    <Footer></Footer>
    </div>
  )
}

function PastEvents() {
  return <div><h1>Past Events</h1>
  <Footer></Footer>
  </div>;
}

function Contact() {
  return <div><h1>Contact Us</h1>
  <Footer></Footer>
  </div>;
}

export default App
