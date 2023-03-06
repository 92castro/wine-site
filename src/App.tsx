import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import './App.css';
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Lessons from './Pages/Lessons'
import Info from './Pages/Info'
import Photo from './Pages/Photo'
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <>
    <Router>
      <Header/>   
      <Routes>  
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/lessons' element={<Lessons/>}></Route>
        <Route path='/info' element={<Info/>}></Route>
        <Route path='/photo' element={<Photo/>}></Route>
      </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
