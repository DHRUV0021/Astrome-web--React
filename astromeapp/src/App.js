import React, { useEffect, useState } from 'react'
import './App.css';
import Header from './ASTROME/header/header';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './ASTROME/home/home'
import Product from './ASTROME/product/product'
import Gallery from './ASTROME/gallery/gallery.jsx'
import About from './ASTROME/about/about.jsx'
import Contact from './ASTROME/contact/contact.jsx'
import Footer from './ASTROME/footer/footer';
import Details from './ASTROME/product/details';

import PulseLoader from "react-spinners/PulseLoader";

function App() {
  const [lod, setLod] = useState(false)

  useEffect(() => {
    setLod(true)
    setTimeout(() => {
      setLod(false)
    }, 900)
  }, [])
  return (
    <>
      {
        lod ?
          <div className='load'>
          <img src={require('./ASTROME/img/astrome.png')} alt='' />
            <PulseLoader color={"#efefef"} loading={lod} size={30} />
          </div> 
          :
          <Router>
            <Header />
            <Switch>

              <Route path='/' exact component={Home} />
              <Route path='/product' exact component={Product} />
              <Route path='/details/:id' exact component={Details} />
              <Route path='/gallery' exact component={Gallery} />
              <Route path='/about' exact component={About} />
              <Route path='/contact' exact component={Contact} />

            </Switch>
            <Footer />
          </Router>
      }
    </>
  );
}

export default App;
