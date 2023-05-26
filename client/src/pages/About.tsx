import React, { useState, useEffect } from 'react';
import axios from '../util/axios';

function About() {
  const [home, setHome] = useState('Hello World!');
  useEffect(() => {
    async function geAboutContent() {
      try {
        const response = await axios.get('/about');
        setHome(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    geAboutContent();
  }, []);
  return <h1 className="text-3xl font-bold underline">{home}</h1>;
}

export default About;
