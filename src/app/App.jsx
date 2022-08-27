import React, {useEffect, useState} from "react";
import Home from "./pages/home";
import { Route, Routes } from "react-router-dom";
import Cart from './pages/cart';
import Header from './components/header/header';


const App = () => {
    // Создаем стейт для того, чтобы сохранить данные из запроса феч
    const [pizzas, setPizzas] = useState([])

    // У нас есть база данных в папке Public, получаем JSON с помощью феч апи

    useEffect(() => {
        fetch("http://localhost:3000/db.json").then((resp)=>resp.json()).then (json => {
            setPizzas(json.pizzas);
        })
        
    }, []);

    console.log(pizzas)

  return (
    <>
     <Header/>
      <Routes>
      <Route path="/" element={ <Home items = {pizzas} />}/>
      <Route path="/cart" element={ <Cart />}/>
       
      </Routes>
    </>
  );
};

export default App;
