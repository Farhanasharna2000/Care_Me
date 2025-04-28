import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import CareMeInfo from './components/CareMeInfo';
import WhyLove from './components/WhyLove';

const App = () => {
  return (
    <div>
  <Navbar/>
  <Banner/>
  <CareMeInfo/>
  <WhyLove/>
    </div>
  );
};

export default App;