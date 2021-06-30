import React, { useContext} from 'react';
import {CartContext} from '../context/CartContex'
import {Link} from 'react-router-dom'
import {CartDetail} from './CartDetail'
import empty from './assets/empty.gif'
export const Cart=()=>{
  const {cartQuantity}=useContext(CartContext)
    return(
      <div>
        {cartQuantity>0?<CartDetail/>:
        <div className="d-flex flex-column align-items-center"> 
          <h2>Carrito vacio</h2>
          <Link to='/'><button className="btn btn-primary">Busca nuevamente</button></Link>
          <img src= {empty} alt="empty" height="300" width="300"/></div>}
      </div>
    )
}