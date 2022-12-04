import React, { useState, useEffect } from 'react';
import axios from '../util/axios';

function Home() {
  const [home, setHome] = useState('Hello World!');
  useEffect(() => {
    async function getHomeContent() {
      try {
        const response = await axios.get('/');
        setHome(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getHomeContent();
  }, []);
  return <h1>{home}</h1>;
}

export default Home;
