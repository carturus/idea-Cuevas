import React, { useContext} from 'react';
import {CartContext} from '../context/CartContex'
import {Link} from 'react-router-dom'
import {CartDetail} from './CartDetail'
import empty from './assets/empty.gif'
export const Cart=()=>{
  const {cartQuantity}=useContext(CartContext)
  console.log(cartQuantity)
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
      <button><Link to='/CheckOut'>Finalizar Compra</Link></button>
</div>


        {cartQuantity>0?<CartDetail/>:
        <div className="d-flex flex-column align-items-center"> 
          <h2>Carrito vacio</h2>
          <Link to='/'><button className="btn btn-primary">Busca nuevamente</button></Link>
          <img src= {empty} alt="empty" height="300" width="300"/></div>}

      </div>
    )
}