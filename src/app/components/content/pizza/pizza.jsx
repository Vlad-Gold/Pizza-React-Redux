import React, {useState} from "react";
import  "./pizza.scss";
import classNames from 'classnames'
import { PropTypes } from 'prop-types'; 
import Button from '../../button/button';




const Pizza = ({name, imageUrl, price, types, sizes, id, onClickAddPizza, addedCount}) => {
 


  const availableTypes = ['тонкое', 'традиционное'];
  const availableSizes = [26, 30, 40];
  const [activeType, setActiveType] = useState(0);
  const [activeSize, setActiveSize] = useState(0);

  const onSelectType = (index) => {
    setActiveType(index)
  }

  const onSelectSize = (index) => {
    setActiveSize(index);
  };

  const onAddPizza = () => {
    const obj = {
      id,
      name,
      imageUrl,
      price,
      size: availableSizes[activeSize],
      type: availableTypes[activeType],
    };
    onClickAddPizza(obj);
  };


  return (
    <div className="pizza">
      <div className="pizza__container">
        <img src={imageUrl} alt="pizza_img" className="pizza_img" />
        <h3>{name}</h3>
        <div className="pizza__options">
          <ul>
            {availableTypes.map( (type, index) => <li key = {`${type}_${index}`} 
  
            className = {classNames( {
              active : activeType === index,
             disabled: !types.includes(index),

            })}
            onClick={()=> onSelectType(index)}
            > {type}</li>)}
            </ul>

            <ul>
              {availableSizes.map((size,index) => 
                <li key = {size} className = {classNames( {
                  active : activeSize === index,
                  disabled: !sizes.includes(size),
    
                })} onClick={()=> onSelectSize(index)} >{size} см. </li>
              )}
      
          </ul>
        </div>
        <div className="pizza__bottom">
          <div className="pizza__bottom_price">{price} ₽</div>
          <Button onClick={onAddPizza} className="button--add" outline>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Добавить</span>
          {addedCount && <i>{addedCount}</i>}
        </Button>
        </div>
      </div>
    </div>
  );
};


//типизируем, вместо тайп скрипта

Pizza.propTypes = {
  name: PropTypes.string,
  imageUrl: PropTypes.string,
  price: PropTypes.number,
  types: PropTypes.arrayOf(PropTypes.number),
  sizes: PropTypes.arrayOf(PropTypes.number),

}

Pizza.defaultProps = {
  name: '---',
  price: 0,
  types: [],
  sizes: [],

};

export default Pizza;
