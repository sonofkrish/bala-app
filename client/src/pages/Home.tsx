import { Helmet } from 'react-helmet-async';

import HomeView from '../sections/home/view/home-view';

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
