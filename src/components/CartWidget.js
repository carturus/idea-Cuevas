import logo from './assets/carts.png'
import React, { useContext} from 'react';
import {CartContext} from '../context/CartContex'
export const CartWidget =() => {
    const {cartQuantity}=useContext(CartContext)
    return (
        <div>{cartQuantity}<img src= {logo} alt="icono" width="35" height="35"/></div>
        
    )
}