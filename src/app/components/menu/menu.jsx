import React from "react";
import style from "./_menu.module.scss";
import sort_element from "../../../images/icons/sort_element.svg";

const Menu = () => {
  return (
    <menu>
      <div className="container">
        <div className={style.menu__devider}></div>
        <div className="menu__container">
          <ul className={style.menu__list}>
            <li className={style.menu__list_item}>Все</li>
            <li className={style.menu__list_item}>Мясные</li>
            <li className={style.menu__list_item}>Вегетарианская</li>
            <li className={style.menu__list_item}>Гриль</li>
            <li className={style.menu__list_item}>Острые</li>
            <li className={style.menu__list_item}>Закрытые</li>
          </ul>
          <div className={style.menu__sort}>
            <img src={sort_element} alt="" className="menu__sort_element" />
            <span>Сортировка по:</span>
            <ul className="menu__sort_select">
              <li>популярности</li>
              {/* <li>по цене</li>
                        <li>по алфавиту</li> */}
            </ul>
          </div>
        </div>
      </div>
    </menu>
  );
};

export default Menu;
