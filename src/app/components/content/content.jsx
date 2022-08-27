import React from "react";
import style from "./content.module.scss";
import Pizza from "./pizza/pizza";
// import pizza_2 from "../../../images/img/pizza_2.png";
// import pizza_3 from "../../../images/img/pizza_3.png";
// import pizza_4 from "../../../images/img/pizza_4.png";

const Content = ({ items }) => {
  return (
    <section>
      <div className={style.container}>
        <h2>Все пиццы</h2>
        <div className={style.content}>
          {items.map((obj) => (
            <Pizza key={obj.id} {...obj} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Content;
