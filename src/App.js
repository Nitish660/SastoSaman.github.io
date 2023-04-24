import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Route,Routes,BrowserRouter } from 'react-router-dom'
import Home from './Pages/Homepage/Home';
import './App.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductPage from './Components/Product/ProductPage';
import About from './Components/Extra/About';
import Contact from './Components/Extra/Contact';
import Login from './Pages/Homepage/Auth/Login';
import Signup from './Pages/Homepage/Auth/Signup';
import ForgotPassword from './Pages/Homepage/Auth/ForgotPassword';

function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home /> }/>
    <Route path='/Home' element={<Home /> }/>
    <Route path="/product/:prodid"
    element={
      <ProductPage />
    }
    />
    <Route path='/about' element={<About/>}/>
    <Route path='/Contact' element={<Contact/>}/>
    <Route path='/login' element={<Login/>}/>    
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/ForgotPassword' element={<ForgotPassword/>}/>


    <Route path='*' element={<div><h1>404 NOT FOUND</h1></div>}/>
   </Routes>
   </BrowserRouter>

   </>
  );
}

export default App;
//