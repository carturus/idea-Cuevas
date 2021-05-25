import React, {useContext,useState} from 'react';
import {CartContext} from '../context/cartContex'
import { getFirestore } from '../firebase';
import  firebase from 'firebase/app'
import 'firebase/firestore'

export const Order =({buyer})=>{
    const {cart,totalPrice}=useContext(CartContext)
   
    const [orderId,setOrderId]=useState('')
    const [order,setOrder]=useState({buyer,cart,date: firebase.firestore.FieldValue.serverTimestamp(), totalPrice})

    const createOrder=()=>{
      const db=getFirestore()
      const orders=db.collection('orders')
      const batch=db.batch()

     orders.add(order).then(({id})=>{
        setOrderId(id)

        cart.forEach((item)=>{
          const itemRef= db.collection('items').doc(item.id)
          batch.update(itemRef,{ stock:item.stock-item.quantity})

        })
        batch.commit()
       console.log('soy el cart de la order',cart)
       alert(`Tu compra ha sido exitosa, tu Folio es ${id}`)
     }).catch(err=>{
       console.log(err)
     })
    }

    console.log(order)
    return(
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
            <table className="table">
              <thead className="thead-dark">
                <tr>
                  <th>N</th>
                  <th>Product</th>
                  <th>Quantity</th>
                  <th>Price</th>
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
          </div>
        
    
             <h4><strong>Total:</strong> {totalPrice}</h4>
           
     
         {/*  */}
        <button onClick={createOrder} >Complete Order</button>
      </div>
        )


}