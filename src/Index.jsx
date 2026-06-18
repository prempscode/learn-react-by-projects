import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
// import Navbar from "./Components/Navbar";
import Product from "./Pages/Product";
import Layout from "./Components/Layout";
import Phone from "./Pages/Phone";
import Camera from "./Pages/Camera";
import Laptop from "./Pages/Laptop";
import NoPage from './Pages/NoPage';
import About from './Pages/About';

const Index = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout></Layout>}>
            <Route index element={<Home></Home>} />
            <Route path="about" element={<About></About>} />


            {/* Products parent route */}
            <Route path="products" element={<Product />}>
              {/* Nested child routes */}
              <Route path="phones" element={<Phone />} />
              <Route path="laptops" element={<Laptop />} />
              <Route path="camera" element={<Camera />} />
            </Route>
          </Route>

          
          <Route path="*" element={<NoPage></NoPage>}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default Index;
