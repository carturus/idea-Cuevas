import React, { useContext} from 'react';
import {CartContext} from '../context/cartContex'
import {Link} from 'react-router-dom'

export const Cart=()=>{
  const {removeFromCart, clearCart,cart, cartQuantity,totalPrice}=useContext(CartContext)
  
    return(
      
      <div>
        { cartQuantity>0? 
        <div>{

        cart.map((item,index)=>(
          <div key={index}>
            <p>Articulo: {item.title} cantidad: {item.quantity} price:{item.price*item.quantity}</p>
            <button onClick={()=>removeFromCart(item.id)}>Eliminar</button>
          </div>
        ))
        }
     <p>Tienes {cartQuantity} productos en tu carrito con un total de {totalPrice}</p>
      <button onClick={clearCart}>Vaciar Carrito</button>
</div>

        :<div> <p>Carriro vacio</p> <button><Link to='/'>Busca nuevamente</Link></button></div>}

      </div>
    )
}