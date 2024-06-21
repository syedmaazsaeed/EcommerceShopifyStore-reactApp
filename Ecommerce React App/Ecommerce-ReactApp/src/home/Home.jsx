import React from 'react'; // Importing React library
import Banner from './Banner'; // Importing Banner component
import HomeCategory from './HomeCategory'; // Importing HomeCategory component
import CategoryShowCase from './CategoryShowCase'; // Importing CategoryShowCase component
import ProductShowCase from './ProductShowCase'; // Importing ProductShowCase component
import Register from './Register'; // Importing Register component
import Location from './Location'; // Importing Location component
import AboutUs from './AboutUs'; // Importing AboutUs component
import AppSection from './AppSection'; // Importing AppSection component
import Sponsor from './Sponsor'; // Importing Sponsor component

const Home = () => {
  return (
    <div>
      {/* Display the main banner of the home page */}
      <Banner />
      {/* Showcase the main categories of the shop */}
      <HomeCategory />
      {/* Showcase specific categories with more details */}
      <CategoryShowCase />
      {/* Showcase highlighted products */}
      <ProductShowCase />
      {/* Section for user registration */}
      <Register />
      {/* Display the store's location */}
      <Location />
      {/* Provide information about the store */}
      <AboutUs />
      {/* Section to promote the store's app */}
      <AppSection />
      {/* Display sponsors of the store */}
      <Sponsor />
    </div>
  );
}

export default Home; // Exporting Home component
