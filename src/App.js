import React from 'react';  
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Register from './views/register.js'
import Login from './views/login.js'
import Main from './views/main.js'
import Home from './views/home.js'
import About from './views/about.js'
import Contact from './views/contact.js'
import Services from './views/services.js'
import Cart from './views/cart.js'
import User from './views/user.js'
import Admin from './views/admin.js'
import Product from './views/product.js'
import Manager from './views/manager.js'
import './index.css';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Login/>} />
      <Route exact path="/home" element ={<Home/>} />
      <Route exact path="/register" element ={<Register/>} />
      <Route exact path="/about" element ={<About/>} />
      <Route exact path="/contact" element ={<Contact/>} />
      <Route exact path="/services" element ={<Services/>} />
      <Route exact path="/cart" element ={<Cart/>} />
      <Route exact path="/user" element ={<User/>} />
      <Route exact path="/admin" element ={<Admin/>} />
      <Route exact path="/product" element ={<Product/>} />
      <Route exact path="/main" element ={<Main/>} />
      <Route exact path="/manager" element ={<Manager/>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
