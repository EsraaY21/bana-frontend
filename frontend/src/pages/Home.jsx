import React from 'react';
import HeroHome from '../components/HeroHome';
import Services from '../components/Services';
import Categories from '../components/Categories';
import LatestProducts from '../components/LatestProducts';
import TrustedBrands from '../components/TrustedBrands';
import DirectorsWords from '../components/DirectorsWords';

const Home = () => {
  return (
    <div className="home">
      <HeroHome />
      <Services />
      <Categories />
      <LatestProducts />
      <TrustedBrands />
      <DirectorsWords />
    </div>
  );
};

export default Home;
