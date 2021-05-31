import React, {useContext,useState} from 'react';
<<<<<<< HEAD
import {CartContext} from '../context/CartContex'
import { getFirestore } from '../firebase';
import  firebase from 'firebase/app'
import {Link} from 'react-router-dom'
import 'firebase/firestore'

export const Order =({buyer})=>{
    const {cart,clearCart,totalPrice}=useContext(CartContext)
   
   // const [orderId,setOrderId]=useState('')
    const [order]=useState({buyer,cart,date: firebase.firestore.FieldValue.serverTimestamp(), totalPrice})
=======
import {CartContext} from '../context/cartContex'
import { getFirestore } from '../firebase';
import  firebase from 'firebase/app'
import 'firebase/firestore'

export const Order =({buyer})=>{
    const {cart,totalPrice}=useContext(CartContext)
   
    const [orderId,setOrderId]=useState('')
    const [order,setOrder]=useState({buyer,cart,date: firebase.firestore.FieldValue.serverTimestamp(), totalPrice})
>>>>>>> 1231b86 (Desafio 11-item collection 2)

    const createOrder=()=>{
      const db=getFirestore()
      const orders=db.collection('orders')
      const batch=db.batch()

     orders.add(order).then(({id})=>{
<<<<<<< HEAD
       // setOrderId(id)
=======
        setOrderId(id)
>>>>>>> 1231b86 (Desafio 11-item collection 2)

        cart.forEach((item)=>{
          const itemRef= db.collection('items').doc(item.id)
          batch.update(itemRef,{ stock:item.stock-item.quantity})

        })
        batch.commit()
<<<<<<< HEAD
       alert(`Tu compra ha sido exitosa, tu Folio es ${id}`)
       clearCart();

=======
       console.log('soy el cart de la order',cart)
       alert(`Tu compra ha sido exitosa, tu Folio es ${id}`)
>>>>>>> 1231b86 (Desafio 11-item collection 2)
     }).catch(err=>{
       console.log(err)
     })
    }

    console.log(order)
    return(
<<<<<<< HEAD
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

         
=======
        <div className="container order-summary">
       
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

          <div className="eleven columns u-full-width ">
>>>>>>> 1231b86 (Desafio 11-item collection 2)
            <table className="table">
              <thead className="thead-dark">
                <tr>
                  <th>N</th>
<<<<<<< HEAD
                  <th>Producto</th>
                  <th>Cantidad</th>
                  <th>Precio</th>
=======
                  <th>Product</th>
                  <th>Quantity</th>
                  <th>Price</th>
>>>>>>> 1231b86 (Desafio 11-item collection 2)
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
              {cart.map((item,index )=> (
                <tr key={index}>
<<<<<<< HEAD
                  <td>{index+1}</td>
                  <td>{item.title}</td>
                  <td>{item.quantity}</td>
                  <td>{item.price}</td>
                  <td>{item.price*item.quantity}</td>
=======

                 <td>{index+1}</td>
                  <td>{item.title}</td>
                  <td>{item.quantity}</td>
                  <td>{item.price}</td>

                 <td>{item.price*item.quantity}</td>

>>>>>>> 1231b86 (Desafio 11-item collection 2)
                </tr>
              ))}
    
              </tbody>
            </table>
<<<<<<< HEAD

=======
          </div>
        
    
>>>>>>> 1231b86 (Desafio 11-item collection 2)
             <h4><strong>Total:</strong> {totalPrice}</h4>
           
     
         {/*  */}
<<<<<<< HEAD
       <Link to='/'> <button className="btn btn-light"  onClick={createOrder} >Confirmar orden</button> </Link>
=======
        <button onClick={createOrder} >Complete Order</button>
>>>>>>> 1231b86 (Desafio 11-item collection 2)
      </div>
        )


}