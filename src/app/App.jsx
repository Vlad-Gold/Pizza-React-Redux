import React from 'react';
import Header from './components/header/header';
import Categories from './components/categories/categories';
import Content from './components/content/content';
import SortPopup from './components/sort/SortPopup';
import style from './app.module.scss'




const App = () => {
    return ( 
        <>
            <Header/>
            <div className={style.container}>
            <Categories items={["Мясные", "Веганская", "Гриль", "Острые", "Закрытые"]}/>
            <SortPopup items ={["популярности", "цене", "алфавиту"] }/>
            </div>
            
            <Content/>
        </> 
     );
}
 
export default App;