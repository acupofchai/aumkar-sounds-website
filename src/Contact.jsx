import './Contact.css'
import Footer from './Footer.jsx';

function Contact() {
  return <div>
    <section className="header">
        <h1>Contact us</h1>
        <h2>Ready to book? Just send us a message!</h2>
      </section>
      <form className="contact-form">
        <div className="form-group">
          <label>Name</label>
          <input type="text" placeholder="Your name" />
        </div>
        
        <div className="form-group">
          <label>Email</label>
          <input type="email" placeholder="youremail@example.com" />
        </div>
        
        <div className="form-group">
          <label>Phone</label>
          <input type="tel" placeholder="(123) 456-7890" />
        </div>
        
        <div className="form-group">
          <label>Message</label>
          <textarea placeholder="Equipment, date, etc" rows="5"></textarea>
        </div>
        
        <button type="submit">Send Message</button>
      </form>
  <Footer></Footer>
  </div>;
}

export default Contact;
