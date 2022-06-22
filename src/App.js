import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/homePage';
import Products from './components/productPage';
import Items from './components/itemPage';
import NavBar from './components/navBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/products' element={<Products />}></Route>
        <Route path='/products/:id' element={<Items />}></Route>
      </Routes>
    </div>
  );
}

export default App;
