import React, { useState, useEffect } from 'react';
import {ItemDetail} from './itemdetail'

export   const ItemDetailContainer=()=>{

  //Datos prueba
  const item= 
    {   
    id: '1',
    title: 'Estetoscopio',
    price: 450,
    pictureUrl: 'https://picsum.photos/200',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  }



const [ itemDetail, setItem] = useState([])

//Funcion getItems, simula promise para consulta de un servidor
const getItem = (itemData) => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        return res(itemData)
      }, 2000)
    })
}

//useEffcect para dispara funcion getItems
useEffect(() => {
    getItem(item).then(result => {
        console.log(result)
        setItem(result);
    });
}, [])

return(

    <ItemDetail
    key={itemDetail.id}
    title={itemDetail.title}
    price={itemDetail.price}
    pictureUrl={itemDetail.pictureUrl}
    description={itemDetail.description}
    
    >
        <h2> hola</h2>
       
    </ItemDetail>

)
    
}