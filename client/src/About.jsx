import React, { useState, useEffect } from 'react';
import axios from 'axios';
function About() {
  const [home, setHome] = useState('Hello World!');
  axios = axios.create({ baseURL: "http://191.96.57.162/api" });
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
  return (
    <div>
      {home}
    </div>
  );
}

export default About;
