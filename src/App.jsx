import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import CareMeInfo from './components/CareMeInfo';
import WhyLove from './components/WhyLove';
import ExclusiveOffer from './components/ExclusiveOffer';
import Experience from './components/Experience';

const App = () => {
  return (
    <div>
  <Navbar/>
  <Banner/>
  <CareMeInfo/>
  <WhyLove/>
  <ExclusiveOffer/>
  <Experience/>
    </div>
  );
};

export default App;