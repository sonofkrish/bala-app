import { Helmet } from 'react-helmet-async';

import HomeView from '../sections/home/home-view';

function HomePage() {
  return (
    <>
      <Helmet>
        <title>Balasubramani K - Web Developer</title>
      </Helmet>
      <HomeView />
    </>
  );
}

export default HomePage;
