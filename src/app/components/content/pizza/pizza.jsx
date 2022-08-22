import React from "react";
import style from "./pizza.module.scss";


const Pizza = ({name, img}) => {
  return (
    <div className={style.pizza}>
      <div className={style.pizza__container}>
        <img src={img} alt="pizza_img" className="pizza_img" />
        <h3>{name}</h3>
        <div className={style.pizza__options}>
          <div>
            <span className={style.active}>тонкое</span>
            <span>традиционное</span>
          </div>
          <span>26 см.</span>
          <span className={style.active}>30 см.</span>
          <span>40 см.</span>
        </div>
        <div className={style.pizza__bottom}>
          <div className={style.pizza__bottom_price}>от 395 ₽</div>
          <button className={style.pizza__bottom_add}>Добавить</button>
        </div>
      </div>
    </div>
  );
};

export default Pizza;
