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
                            <a href="https://appt.link/meet-with-our-expert-DFJETQAY" target='_blank' rel="noreferrer">Book a Spot</a>
                        </div>
                        <div className="line"></div>
                        <div className="person">
                            <img src={susan} alt="Susan J. Daniels" />
                            <h3>Susan J. Daniels</h3><br />
                            <a href="https://appt.link/meet-with-susan-jackson-uyJmf3Uf" target='_blank' rel="noreferrer">Book a Spot</a>
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