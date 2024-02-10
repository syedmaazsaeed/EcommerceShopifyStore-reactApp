import React from 'react';
import Banner from './Banner';
import HomeCategory from './HomeCategory';
import CategoryShowCase from './CategoryShowCase';
import ProductShowCase from './ProductShowCase';
import Register from './Register';
import Location from './Location';
import AboutUs from './AboutUs';
import AppSection from './AppSection';
import Sponsor from './Sponsor';

const Home = () => {
  return (
    <div>
     <Banner/>
     <HomeCategory/>
     <CategoryShowCase/>
     <ProductShowCase/>
     <Register/>
     <Location/>
     <AboutUs/>
     <AppSection/>
     <Sponsor/>
    </div>
  );
}

export default Home;

