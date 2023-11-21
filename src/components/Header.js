import React, { useState } from 'react';
import { FaShoppingCart } from "react-icons/fa";
import Order from './Order';

import About from '../pages/About'
import App from '../App';
import { NavLink, Route, Routes } from 'react-router-dom';
import Contacs from '../pages/Contacs';
import Ofice from '../pages/Ofice';
import Home from '../pages/Home';

const showOrders=(props)=>{
  let summa=0
  props.orders.forEach(el=>summa+=Number.parseFloat(el.price))
  return(<div>
     {props.orders.map(el=>(
              <Order  onDelete ={props.onDelete} key={el.id} item={el}/>
            ))}

            <p className='summa'>Сумма: {new Intl.NumberFormat().format(summa)}$</p>
  </div>)
}
const showNothing=()=>{
  return(
    <div className='empty'>
      <h2>Товаров нет</h2>
    </div>
  )
}

export default function Header(props) {
 
  let [cartOpen,setCartOpen]=useState(false);

  return (
   <header>
    <div>
       <nav >
        <span className='logo'>
        <NavLink to ='/' >House Staff</NavLink>
          </span>
        
        <ul className='nav'>
            <li>
              <NavLink to='/About' >Про нас </NavLink>
              </li>
              <li>
              <NavLink to ='/Contacs'>Контакты</NavLink>
              </li>
              <li>
              <NavLink to ='/Ofice'>Кабинет</NavLink>
              </li>
        </ul>
        </nav>
       
       
        <FaShoppingCart onClick ={()=>setCartOpen(cartOpen=!cartOpen)}className={`shop-cart-button ${cartOpen &&'active'}`}/>
        {cartOpen &&(
          <div className='shop-cart'>
           {props.orders.length>0 ?
           showOrders(props): showNothing()}
          </div>
        )}
    </div>
    <div className='presentation'></div>
    {/* <Routes>
          
          <Route exat path='/Contacs' element={<Contacs/>}></Route>
          <Route  exat path='/About' element={<About/>}></Route>
          <Route exat  path='/Ofice' element={<Ofice/>}></Route>
         
        </Routes> */}
   </header>
   
  )
}
