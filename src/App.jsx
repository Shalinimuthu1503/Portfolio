import React from 'react';
import Header from './components/Header';
import HeroSection from   './components/HeroSection';
import CaseStudies from './components/CaseStudies.jsx';
import Testimonials from './components/Testimonials.jsx';
import RecentWork from  './components/RecentWork.jsx';
import ContactForm from './components/ContactForm.jsx';



function App() {
  return (
    <div>
      <Header />
      <HeroSection/>
      <CaseStudies/>
      <Testimonials/>
      <RecentWork/>
      <ContactForm/>
      
    </div>
  );
}

export default App;
