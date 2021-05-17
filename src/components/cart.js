import React, { useContext} from 'react';
import {CartContext} from '../context/cartContex'


export const Cart=()=>{
  const {removeFromCart, clearCart,cart, cartQuantity,totalPrice}=useContext(CartContext)
  
    return(
      
     
       
        <div>{

        cart.map((item)=>(
          <div>
            <p>Articulo: {item.title} cantidad: {item.quantity} price:{item.price*item.quantity}</p>
            <button onClick={()=>removeFromCart(item.id)}>Eliminar</button>
          </div>
        ))
        }
     <p>Tienes {cartQuantity} productos en tu carrito con un total de {totalPrice}</p>
      <button onClick={clearCart}>Vaciar Carrito</button>
</div>

        

     
    )
}