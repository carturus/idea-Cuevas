import React, { useState, useEffect,useContext} from 'react';
import {ItemDetail} from './itemdetail'
import { useParams } from 'react-router';
import {CartContext} from '../context/cartContex'
import { getFirestore } from '../firebase';


export   const ItemDetailContainer=()=>{
    const {cart,cartQuantity}=useContext(CartContext)
    const {itemId}=useParams()
    const [item,setItem]=useState({})
    const [duplicado,setDuplicado]=useState()
   

console.log('item found' , item.price)

useEffect(()=>{
  const db=getFirestore();
  const itemCollection=db.collection('items')
  const item=itemCollection.doc(itemId)
  item.get().then((doc)=>{
    if(!doc.exists){
      console.log('Item does no exist')
      return
    }
    setItem({id: doc.id, ...doc.data()})
    
    setDuplicado(item.id)

  }).catch((error)=>{
    console.log('error searshing',error)
  })
  

},[])

 const cartItem=cart.find(cartItem => cartItem.id==duplicado)
 let newStock=item.stock-(cartItem===undefined?0:cartItem.quantity)
 console.log("soy el new item stock",newStock ,"soy el original",item.stock)

return(
  <div>

  {item? (
    <ItemDetail
    
    id={item.id}
    title={item.title}
    price={item.price}
    imageId={item.imageId}
    description={item.description}
    stock={newStock}
    
    >
       
    </ItemDetail>):(<h4>No existe producto</h4>)
}
</div>
)
    
}