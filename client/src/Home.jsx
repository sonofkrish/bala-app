import React, { useState, useEffect } from 'react';
import axios from 'axios';
function Home() {
  const [home, setHome] = useState('Hello World!');
  axios = axios.create({ baseURL: "http://191.96.57.162/api" });
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
  return (
    <div>
      {home}
    </div>
  );
}

export default Home;
