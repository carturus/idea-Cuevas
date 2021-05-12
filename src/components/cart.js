import React, { useContext} from 'react';
import {CartContext} from '../context/cartContex'

export const Cart=()=>{
  const {removeFromCart, clearCart,cart, cartQuantity}=useContext(CartContext)

  console.log(cart)
    return(
      <div>
        { cart? cart.map((item)=>(

          <div>
          <p>Articulo: {item.title} cantidad: {item.quantity}</p>
          <button onClick={()=>removeFromCart(item.id)}>Eliminar</button>
          </div>
        )

        ) :<p>Carriro vacio</p>}
      Tienes {cartQuantity} productos en tu carrito
      <button onClick={clearCart}>Vaciar Carrito</button>
      </div>
    )
}