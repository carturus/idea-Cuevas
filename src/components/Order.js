import React, {useContext,useState} from 'react';
import {CartContext} from '../context/CartContex'
import { getFirestore } from '../firebase';
import  firebase from 'firebase/app'
import {Link} from 'react-router-dom'
import 'firebase/firestore'

export const Order =({buyer})=>{
    const {cart,clearCart,totalPrice}=useContext(CartContext)
   
   // const [orderId,setOrderId]=useState('')
    const [order]=useState({buyer,cart,date: firebase.firestore.FieldValue.serverTimestamp(), totalPrice})

    const createOrder=()=>{
      const db=getFirestore()
      const orders=db.collection('orders')
      const batch=db.batch()

     orders.add(order).then(({id})=>{
       // setOrderId(id)

        cart.forEach((item)=>{
          const itemRef= db.collection('items').doc(item.id)
          batch.update(itemRef,{ stock:item.stock-item.quantity})

        })
        batch.commit()
       alert(`Tu compra ha sido exitosa, tu Folio es ${id}`)
       clearCart();

     }).catch(err=>{
       console.log(err)
     })
    }

    return(
        <div className="container">
       
           <h3>Order Summary</h3>        
          <div className="d-flex flex-column">
             <p><strong>Status:</strong> Pending</p>
             <p><strong>Fecha:</strong> {new Date().toDateString()}</p>
             <p><strong>Name:</strong> {buyer.name}</p>
             <div className="order-emailphone">
               <p><strong>Email:</strong> {buyer.email}</p>
               <p className="phone"><strong>Phone:</strong>{buyer.phone}</p>
             </div>
           </div>

         
            <table className="table">
              <thead className="thead-dark">
                <tr>
                  <th>N</th>
                  <th>Producto</th>
                  <th>Cantidad</th>
                  <th>Precio</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
              {cart.map((item,index )=> (
                <tr key={index}>
                  <td>{index+1}</td>
                  <td>{item.title}</td>
                  <td>{item.quantity}</td>
                  <td>{item.price}</td>
                  <td>{item.price*item.quantity}</td>
                </tr>
              ))}
    
              </tbody>
            </table>

             <h4><strong>Total:</strong> {totalPrice}</h4>
           
     
         {/*  */}
       <Link to='/'> <button className="btn btn-light"  onClick={createOrder} >Confirmar orden</button> </Link>
      </div>
        )


}