import React, { useState, useEffect,useContext} from 'react';
import {ItemDetail} from './itemdetail'
import { useParams } from 'react-router';
import  items from './datos/items.json'
import {CartContext} from '../context/cartContex'


export   const ItemDetailContainer=()=>{
    const {cart,cartQuantity}=useContext(CartContext)
    const {itemId}=useParams()
    const [ itemDetail, setItem] = useState([])
    const [stock,setStock]=useState(10)


//Funcion getItem, simula promise para consulta de un servidor
const getItem = (itemData) => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        console.log('consegui datos')
        return res(itemData)
      }, 2000)
    })
}

//Restar Stock
const restarStock=(resultado)=>{
  const cartItem=cart.find(cartItem => cartItem.id==resultado.id)
  return resultado.stock-(cartItem===undefined?0:cartItem.quantity)
}

//useEffcect para dispara funcion getItem
useEffect(() => {
    getItem(items.find(item => item.id==itemId)).then(result => {
    setItem(result);  
    cartQuantity>0?setStock(restarStock(result)):setStock(result.stock)

    });
}, [])

return(
  <div>

  {itemDetail? (
    <ItemDetail
    
    id={itemDetail.id}
    title={itemDetail.title}
    price={itemDetail.price}
    pictureUrl={itemDetail.pictureUrl}
    description={itemDetail.description}
    stock={stock}
    
    >
       
    </ItemDetail>):(<h4>No existe producto</h4>)
}
</div>
)
    
}