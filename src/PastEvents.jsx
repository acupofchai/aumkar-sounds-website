import { Link } from 'react-router-dom';
import './PastEvents.css';
import { InstagramEmbed } from 'react-social-media-embed';
import Footer from './Footer';

function PastEvents() {
   return (
    <div className="past-events">
        <section className="header">
        <h1>Past Events</h1>
        <h2>View some of our past events here. From markets to birthday parties and weddings, Aumkar can do it all!</h2>
      </section>
      <div className="instagram-grid">
        <InstagramEmbed 
          url="https://www.instagram.com/p/DQVokbmjTsm/" 
          width={328}
        />
        <InstagramEmbed 
          url="https://www.instagram.com/p/DNhHSRPthqk/" 
          width={328}
        />
        <InstagramEmbed
            url="https://www.instagram.com/p/DJKvuq6yCV1/"
            width={328}
        />
        <InstagramEmbed
            url="https://www.instagram.com/p/DQ216AAjURs/"
            width={328}
        />
        <InstagramEmbed
            url="https://www.instagram.com/p/DEOFi7Xy2qs/"
            width={328}
        />
        <InstagramEmbed
            url="https://www.instagram.com/p/DNhHqmZNe21/"
            width={328}
        />
      </div>
      <h2>Visit our instagram to see more!</h2>
      <Footer></Footer>
    </div>
  );
}

export default PastEvents;