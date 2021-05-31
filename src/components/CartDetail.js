
import {CartContext} from '../context/CartContex'
import React, { useContext} from 'react';
import {Link} from 'react-router-dom'
export const CartDetail=()=>{
    const {removeFromCart, clearCart,cart, cartQuantity,totalPrice}=useContext(CartContext)
    return(



        <div >
         {
            cart.map((item,index)=>(
              <div  key={index} className="card-horizontal container d-flex">
                  
                   <img className="card-img-rigth"  width="100" height="100" src={item.imageId} alt="Cart"/>
                 
                   <div className="card-body text-center">
                      <h5 className="card-title">{item.title}</h5>
                      <p className="card-text">cantidad: {item.quantity} price:{item.price}</p>
                     <button  className="btn btn-danger" onClick={()=>removeFromCart(item.id)}>Eliminar</button> 
                   </div>
              
                   <h2 className="card-body ">${item.price*item.quantity} mxn </h2>
                   
              </div>
            ))
          }
        <h2 className="card-text text-center">Tienes {cartQuantity} productos en tu carrito con un total de ${totalPrice} mxn</h2>
        
        <div className="d-flex justify-content-end">
          <div><button className="btn btn-danger" onClick={clearCart}>Vaciar Carrito</button></div> 
          <Link to='/CheckOut'><button className="btn btn-primary" >Finalizar Compra</button></Link>
        </div>
      </div>
    )
}