import React from "react";
import style from "./content.module.scss";
import Pizza from "./pizza/pizza";
import { useSelector, useDispatch } from 'react-redux';
import PizzaLoading from './pizza/pizzaLoading';


const Content = ({ items }) => {
  const dispatch = useDispatch();
// const isLoaded = useSelector(({pizzas}) => pizzas.isLoaded);
const isLoaded = useSelector((state) => state.default.pizzas.isLoaded)

const cartItems = useSelector((state) => state.default.cart.items);

console.log(cartItems)

const handleAddPizzaToCart = (obj) => {
  dispatch({
    type: 'ADD_PIZZA_CART',
    payload: obj,
  });
};

  return (
    <section>
      <div className={style.container}>
        <h2>Все пиццы</h2>
        <div className={style.content}>
          { isLoaded ? (items.map((obj) => 
            <Pizza key={obj.id} isLoading = {true} {...obj} onClickAddPizza={handleAddPizzaToCart}  addedCount={cartItems[obj.id] && cartItems[obj.id].items.length}/>) ) : 

            Array(12).fill(0).map((_, index) => <PizzaLoading key={index}/>)} 
    
        </div>
      </div>
    </section>
  );
};

export default Content;

//addedCount={cartItems[obj.id] && cartItems[obj.id].items.length}
