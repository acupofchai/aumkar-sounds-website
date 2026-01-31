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
        <img src="src\rajshenoy.jpg" alt="About Aumkar Sounds" className="about-image" />
        <div className="about-content">
          <p>Aumkar sounds is a family owned audio and speaker rental business
            based in the Greater Houston area. The business is owned and 
            operated by Raghavendra Shenoy, who has always had a passion
            for everything related to sound and audio technology. A music lover,
            Raghavendra plays the tabla, a classical Indian drum. At
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
  return <div><h1>View our available equipment</h1></div>
}

function PastEvents() {
  return <div><h1>Past Events</h1></div>;
}

function Contact() {
  return <div><h1>Contact Us</h1></div>;
}

export default App
