import React, { useState, useEffect } from 'react';
import axios from 'axios';
function About() {
  const [home, setHome] = useState('Hello World!')
  useEffect(() => {
    async function geAboutContent() {
      try {
        const response = await axios.get('http://localhost:3001/about');
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
