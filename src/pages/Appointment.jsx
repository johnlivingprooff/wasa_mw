import '../styles/Appointment.css';
import { useEffect } from 'react';
import Header from '../components/Header2';
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import daniel from '../assets/Daniel.jpg';
import susan from '../assets/Susan.jpg';

export default function Appointment() {
      useEffect(() => {
        const handleSmoothScroll = (event) => {
          if (event.target.tagName === 'A' && event.target.hash !== '') {
            event.preventDefault();
            const targetId = event.target.hash.substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
              targetElement.scrollIntoView({ behavior: 'smooth' });
            }
          }
        };
    
        document.addEventListener('click', handleSmoothScroll);
    
        return () => {
          document.removeEventListener('click', handleSmoothScroll);
        };
      }, []);

    return (
      <div>
        <Header />
        <section className="appt-co">
          <div className="container">
            <h1>Book an Appointment</h1>
            <p>With Our Experts</p>
            <div className="people">
              <div className="person">
                <img src={daniel} alt="Dingani N. Daniels" />
                <h3>Dingani N. Daniels</h3><br />
                <a
                  href="https://appointmentwasa.youcanbook.me"
                  target='_blank'
                  rel="noreferrer"
                  
                >
                  Book a Spot
                </a>
              </div>
              <div className="line"></div>
              <div className="person">
                <img src={susan} alt="Susan J. Daniels" />
                <h3>Susan J. Daniels</h3><br />
                  <a
                    href="https://appointmentwasa1.youcanbook.me"
                    target='_blank'
                    rel="noreferrer"
                    // style={{ pointerEvents: 'none', opacity: 0.5 }}
                    // tabIndex={-1}
                    // aria-disabled="true"
                    // onClick={e => e.preventDefault()}
                  >
                    Book a Spot
                  </a>
              </div>
            </div>
          </div>
        </section>
        <span id='contact'></span>
        <Contact />
        <Footer />
      </div>
    );
}