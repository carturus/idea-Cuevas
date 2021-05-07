import React, { useState, useEffect } from 'react';
import {ItemDetail} from './itemdetail'
import { useParams } from 'react-router';
import  items from './datos/items.json'

export   const ItemDetailContainer=()=>{
  const {itemId}=useParams()
  console.log(itemId)
const [ itemDetail, setItem] = useState([])

//Funcion getItem, simula promise para consulta de un servidor
const getItem = (itemData) => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        console.log('consegui datos')
        return res(itemData)
      }, 2000)
    })
}

//useEffcect para dispara funcion getItem
useEffect(() => {
    getItem(items.find(item => item.id==itemId)).then(result => {
        console.log(result)
        setItem(result);
    });
}, [])

return(
  <div>

  {itemDetail ? (
    <ItemDetail
    key={itemDetail.id}
    id={itemDetail.id}
    title={itemDetail.title}
    price={itemDetail.price}
    pictureUrl={itemDetail.pictureUrl}
    description={itemDetail.description}
    
    >
       
    </ItemDetail>):(<h4>No existe producto</h4>)
}
</div>
)
    
}