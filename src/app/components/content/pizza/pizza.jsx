import React, {useState} from "react";
import  "./pizza.scss";
import classNames from 'classnames'
import { PropTypes } from 'prop-types'; 


const Pizza = ({name, imageUrl, price, types, sizes}) => {
  const availableTypes = ['тонкое', 'традиционное'];
  const availableSizes = [26, 30, 40];
  const [activeType, setActiveType] = useState(0);
  const [activeSize, setActiveSize] = React.useState(0);

  const onSelectType = (index) => {
    setActiveType(index)
  }

  const onSelectSize = (index) => {
    setActiveSize(index);
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
          <div className="pizza__bottom_price">{price}</div>
          <button className="pizza__bottom_add">Добавить</button>
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
