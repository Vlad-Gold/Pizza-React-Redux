import React, {  } from "react";
import Home from "./pages/home/home";
import { Route, Routes } from "react-router-dom";
import Cart from "./pages/cart/cart";
import Header from "./components/header/header";



const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home  />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
};

export default App;

// /////////////////////////////////////////
// тоже самое с помощью connect
// export default connect((state) => {
//     return {
//       items: state.pizzas.items,
//       filters: state.filters,
//     };
//   }, (dispatch) => {
//     return {
//       setPizzas: (items) => dispatch(setPizzas(items))
//     }
//   })(App);

// пример запроса вместо axios стандартным fetch
//     // У нас есть база данных в папке Public, получаем JSON с помощью феч апи
//     // useEffect(() => {
//     //     fetch("http://localhost:3000/db.json").then((resp)=>resp.json()).then (json => {
//     //         setPizzas(json.pizzas);
//     //     })

// затем можно:
//     // Создаем стейт для того, чтобы сохранить данные из запроса феч
//     // const [pizzas, setPizzas] = useState([]);
//////////////////////////////////////////////////////////////////////////////////
