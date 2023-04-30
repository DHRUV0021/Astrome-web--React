/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from './astrome/admin/admin';
import Header from './astrome/header/header';
import Product from './astrome/product/product.jsx';
import Contact from './astrome/contact/contact';
import Gallery from './astrome/gallery/gallery';
import View from './astrome/product/view.jsx'
import Type_of_pro from './astrome/type_of_product/type_of_pro';
import Show from './astrome/type_of_product/show';
import Show_prod from './astrome/product/show_prod';
import Test from './test';
import Update_Product from './astrome/product/update_product';
import Update_type from './astrome/type_of_product/update_type';
import T_view from './astrome/type_of_product/t_view';



function App() {

  return (

    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/Admin' exact element={<Admin />} />
        <Route element={<Test />} >

          <Route path='/' exact element={<Type_of_pro />} />
          <Route path='/update_type/:id' element={<Update_type />} />
          <Route path='/t_view/:id' element={<T_view />} />
          <Route path='/show' exact element={<Show />} />
          <Route path='/product' element={<Product />} />
          <Route path='/show_prod' exact element={<Show_prod />} />
          <Route path='/update_product/:id' element={<Update_Product />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/view/:id' element={<View />} />

        </Route>
      </Routes>
    </BrowserRouter>


  )
}

export default App;
