import React from 'react';
import Header from './components/Header';
import HotelList from './components/HotelList';
import DestinationsSection from './components/DestinationsSection';
import TestimonialsSection from './components/TestimonialsSection';
import NewsletterSection from './components/NewsletterSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main>
        <HotelList />
        <DestinationsSection />
        <TestimonialsSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;