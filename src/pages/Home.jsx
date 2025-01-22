import React from 'react';
import '../styles/Home.css'
import Header from '../components/Header.jsx'
import Sliders from '../components/Sliders.jsx'
import img1 from '../assets/cruise-ship.jpg'
import img2 from '../assets/student-loan.avif'
import img3 from '../assets/production-line-crop.jpg'
import img4 from '../assets/scholarships.jpg'
import img5 from '../assets/travel.jpg'

const images = [
  {
    url: img1,
    alt: 'cruise-ship',
    title: 'Cruise Ship Jobs – Careers on the High Seas',
    body: 'Dream of working on a cruise ship? WASA recruits for international cruise lines.',
    ctaTxt: 'Apply Now',
    link: 'https://bit.ly/Workandstudyabroad'
  },
  {
    url: img2,
    alt: 'education-loan',
    title: 'Educational Loans – Study Now, Pay Later',
    body: 'WASA partners with an international financier to offer loans for postgraduate studies covering tuition, airfare, living expenses, and more.',
    ctaTxt: 'Learn More',
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
  return (
    <div>
        <Header />
        <div className="slide-container">
          <Sliders images={images} />
        </div>
    </div>
  );
}
