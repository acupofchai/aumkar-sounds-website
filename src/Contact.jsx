import './Contact.css'
import Footer from './Footer.jsx';

function Contact() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      zipcode: e.target.zipcode.value,
      phone: e.target.phone.value,
      message: e.target.message.value
    };

    try {
      const response = await fetch('https://aumkar-sounds-website-backend.onrender.com/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      
      if (data.success) {
        alert('Message sent successfully!');
        e.target.reset();
      } else {
        alert('Failed to send message');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error sending message');
    }
  };
  
  return (
    <div>
      <section className="header">
        <h1>Contact us</h1>
        <h2>Ready to book? Just send us a message and we will get back to you!</h2>
      </section>
      
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label>Name</label>
          <input type="text" name="name" placeholder="Your name" required />
        </div>
        
        <div className="form-group">
          <label>Zip Code (Greater Houston area ONLY)</label>
          <input type="text" name="zipcode" placeholder="12345" />
        </div>
        
        <div className="form-group">
          <label>Phone</label>
          <input type="tel" name="phone" placeholder="(123) 456-7890" />
        </div>
        
        <div className="form-group">
          <label>Message</label>
          <textarea name="message" placeholder="Equipment, date, etc" rows="5" required></textarea>
        </div>
        
        <button type="submit">Send Message</button>
      </form>
      
      <Footer />
    </div>
  );
}

export default Contact;