import React from 'react';
import style from './content.module.scss';
import Pizza from './pizza/pizza';
import pizza_1 from "../../../images/img/pizza_1.png";
import pizza_2 from "../../../images/img/pizza_2.png";
import pizza_3 from "../../../images/img/pizza_3.png";
import pizza_4 from "../../../images/img/pizza_4.png";

const Content = () => {
    return ( 
        <section>
            <div className="container">
                <h2>Все пиццы</h2>
                <div className={style.content}>
                <Pizza name="Чизбургер-пицца" img = {pizza_1} />
                <Pizza name="Сырная" img = {pizza_2}/>
                <Pizza name="Креветки по-азиатски" img = {pizza_3}/>
                <Pizza name="Сырный цыпленок" img = {pizza_4}/>
                </div>
                <div className={style.content}>
                <Pizza name="Чизбургер-пицца" img = {pizza_1}/>
                <Pizza name="Сырная" img = {pizza_2}/>
                <Pizza name="Креветки по-азиатски" img = {pizza_3}/>
                <Pizza name="Сырный цыпленок" img = {pizza_4}/>
                </div>
            </div>
        </section>
     );
}
 
export default Content;