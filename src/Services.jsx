import './Services.css'
import Footer from './Footer.jsx';

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
    },
    {
      src: "subwoofer.jpeg",
      caption: "QSC KS112 subwoofers 2,000 watts each"
    }
  ]
  return( <div>
    <section className="header">
        <h1>View our available equipment</h1>
        <h2>Speakers, mixers, mics, and mic stands</h2>
      </section>
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

export default Services;