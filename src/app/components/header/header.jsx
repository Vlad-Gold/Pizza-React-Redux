import React from 'react';
import style from './_header.module.scss'
import logo from '../../../images/logo/logo.png'
import basket from '../../../images/icons/basket.svg'

const Header = () => {
    return (
         <header>
        <div className={style.container}>
           <div className={style.header__logo}>
            <img src={logo} alt="logo" />
            <div>
                <h1>Voronej PIZZA</h1>
                <p>Cамая вкусная пицца в Воронежской области </p>
            </div>
           </div>
           <div className={style.header__basket}>
            <span className={style.header__basket_price}> 520 ₽</span>
            <span className={style.header__basket_devider}></span>
            <img className={style.header__basket_img} src= {basket} alt="basket_img" />
            <span className={style.header__basket_qty}>3</span>
           </div>
        </div>
        <div className={style.header__devider}></div>
    </header>
    );
}

 
export default Header;