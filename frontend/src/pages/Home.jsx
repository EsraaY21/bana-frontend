import React from 'react';
import HeroHome from '../components/HeroHome';
import Services from '../components/Services';
import Categories from '../components/Categories';

const Home = () => {
  return (
    <div className="home">
      <HeroHome />
      <Services />
      <Categories />
    </div>
  );
};

export default Home;
