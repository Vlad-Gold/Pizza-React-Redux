import React, { useEffect } from "react";
import Home from "./pages/home";
import { Route, Routes } from "react-router-dom";
import Cart from "./pages/cart";
import Header from "./components/header/header";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setPizzas } from "./redux/actions/pizzas";

const App = () => {
  const dispatch = useDispatch();

  // console.log(state);

  // У нас есть база данных в папке Public, получаем JSON с помощью axios
  // Redux: нужно перекинуть полученное в редакс setPizzas action
  // когда происходит первый рендер, на сервер отправляется гет запрос
  // дождись ответа и вызови dispatch
  useEffect(() => {
    axios.get("http://localhost:3000/db.json").then(({ data }) => {
      dispatch(setPizzas(data.pizzas));
      console.log(setPizzas(data.pizzas));
    });
  }, []);

 

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
