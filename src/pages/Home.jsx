import React from 'react';
import Greeting from './Greeting'; // Import the Greeting component

const Home = () => {
  return (
    <div>
      <Greeting /> {/* This will only render on the homepage */}
      {/* Other homepage content goes here */}
    </div>
  );
};

export default Home;
