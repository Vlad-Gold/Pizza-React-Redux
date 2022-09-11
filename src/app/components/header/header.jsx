import React from 'react';
import style from './_header.module.scss'
import logo from '../../../images/logo/logo.png'
import basket from '../../../images/icons/basket.svg'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {

    // для cart, useSelector дает из редакса cart и вытаскивает из него totalPrice, totalCount

    // const {totalPrice, totalCount} = useSelector(({cart}) => ({
    //     totalPrice: cart.totalPrice,
    //     totalCount: cart.totalCount
    // }));
    // console.log(totalPrice);
    
    // const { totalPrice, totalCount } = useSelector(({ cart }) => cart);

    return (
         <header>
        <div className={style.container}>
           <div className={style.header__logo}>
            <img src={logo} alt="logo" />
            <div>
                <Link to = "/"><h1>Voronej PIZZA</h1></Link>
                
                <p>Cамая вкусная пицца в Воронежской области </p>
            </div>
           </div>
           <Link to = "/cart">
           <div className={style.header__basket}>
            <span className={style.header__basket_price}> 1 ₽</span>
            <span className={style.header__basket_devider}></span>
            <img className={style.header__basket_img} src= {basket} alt="basket_img" />
            <span className={style.header__basket_qty}>2</span>
           </div>
           </Link>
        </div>
        <div className={style.header__devider}></div>
    </header>
    );
}

 
export default Header;