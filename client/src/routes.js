import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from './Layout';
import Home from './Home';
import About from './About';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route id="await" path="/about" element={<About />} />
    </Route>
  ));

function Routes() {
  return (
    <RouterProvider router={router} />
  );
}

export default Routes;