// App.jsx
import React from 'react';
 // Import your CSS file
import Header from './header';
import HeroSection from './HeroSection';
import DestinationsSection from './DestinationsSection';
import ContactForm from './ContactForm';
import Footer from './footer';

const App = () => {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <DestinationsSection />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default App;
