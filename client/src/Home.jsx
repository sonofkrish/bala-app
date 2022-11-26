import React, { useState, useEffect } from 'react';
import axios from 'axios';
function Home() {
  const [home, setHome] = useState('Hello World!')
  useEffect(() => {
    async function getHomeContent() {
      try {
        const response = await axios.get('http://localhost:3001/');
        setHome(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getHomeContent();
  }, []);
  return (
    <div>
      {home}
    </div>
  );
}

export default Home;
