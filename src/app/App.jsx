import React from "react";
import Home from "./pages/home";
import { Route, Routes } from "react-router-dom";
import Cart from './pages/cart';
import Header from './components/header/header';


const App = () => {
  return (
    <>
     <Header/>
      <Routes>
      <Route path="/" element={ <Home />}/>
      <Route path="/cart" element={ <Cart />}/>
       
      </Routes>
    </>
  );
};

export default App;
