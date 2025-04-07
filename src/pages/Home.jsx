import React, { useEffect } from 'react';
import '../styles/Home.css'
import Header from '../components/Header.jsx'
import Sliders from '../components/Sliders.jsx'
import img1 from '../assets/cruise-ship.jpg'
import img2 from '../assets/student-loan.avif'
import img3 from '../assets/production-line-crop.jpg'
import img4 from '../assets/scholarships.jpg'
import img5 from '../assets/travel.jpg'
import Partners from '../components/Partners.jsx';
import About from '../components/About.jsx';
import Services from '../components/Services.jsx';
import Contact from '../components/Contact.jsx';
import Footer from '../components/Footer.jsx';
import Map from '../components/Map.jsx';
import WA from '../components/WA.jsx';

const slide_images = [
  {
    url: img1,
    alt: 'cruise-ship',
    title: 'Cruise Ship Jobs – Careers on the High Seas',
    body: 'Dream of working on a cruise ship? WASA recruits for international cruise lines.',
    ctaTxt: 'Apply Now',
    link: 'https://forms.gle/HyLeLdQfezTJV9fC8'
  },
  {
    url: img2,
    alt: 'education-loan',
    title: 'Educational Loans – Study Now, Pay Later',
    body: 'WASA partners with an international financier to offer loans for postgraduate studies covering tuition, airfare, living expenses, and more.',
    ctaTxt: 'Apply Today',
    link: 'https://forms.gle/GirbhnEghStmtT5e6'
  },
  {
    url: img3,
    alt: 'europe-jobs',
    title: 'Europe Jobs – Blue Collar Work Opportunities',
    body: 'Looking for factory jobs in Europe? WASA has blue-collar job opportunities in Germany, Poland, Norway, the Czech Republic, and Serbia. Jobs Available: • Cleaning • Sorting • Packaging • Labeling',
    ctaTxt: 'Learn More',
    link: 'https://work-and-study-abroad.bookafy.com'
  },
  {
    url: img4,
    alt: 'scholarships',
    title: 'Scholarships in China, India, and Malaysia',
    body: 'WASA offers scholarships for undergraduate and postgraduate studies in China, India, and Malaysia. Scholarships cover tuition (full/partial). This is a great way to access quality education while easing the burden of tuition costs.',
    ctaTxt: 'Learn More',
    link: 'https://rebrand.ly/wasamw'
  },
  {
    url: img5,
    alt: 'general-services',
    title: 'General Services – Making International Travel Easier',
    body: 'WASA ensures a smooth journey abroad with visa appointment bookings, flight and tour arrangements, and career guidance including ATS-compliant resumes and interview training.',
    ctaTxt: 'Learn More',
    link: 'https://rebrand.ly/wasamw'
  }
];

export default function Home() {
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
        <div className="slide-container">
          <Sliders images={slide_images} />
        </div>
        <span id='about'></span>
        <div className="partner-container">
          <Partners />
        </div>
        <About />
        <span id='services'></span>
        <Services />
        <div className="start-now" >
          <div style={{textAlign: 'center', padding: '50px 0', backdropFilter: 'blur(5px)', backgroundColor: 'rgba(10, 10, 10, 0.5)', width: '100%'}}>
          <h2>Start Your Journey</h2>
          <h1>NOW</h1>
          </div>
        </div>
        <span id='contact'></span>
        <Contact />
        <Map />
        <Footer />
        <WA />
    </div>
  );
}
