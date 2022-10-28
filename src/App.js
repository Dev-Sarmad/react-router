import React from "react";
import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import Home from './pages/Home' ;
import About from './pages/About' ;
import Products from './pages/Products' ;
import Error from './pages/Error';
import Sharedlayout from "./pages/Sharedlayout";
import SingleProduct from './pages/SingleProduct';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Sharedlayout />}>
      <Route index element={<Home />} / >
      <Route path="/about" element={<About />} />
      <Route path="products" element={<Products />} />
      <Route path="products/:productid" element={<SingleProduct />} />
      <Route path="*" element={<Error />} />
      </Route>
    </Routes>
    </BrowserRouter>
    );
}

export default App;
