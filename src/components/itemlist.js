import {Item} from './item'
import React, { useState, useEffect } from 'react';


export const ItemList = ()=>{


  //Datos prueba
    const items = [
        {   
        id: '1',
        title: 'Estetoscopio',
        price: 450,
        pictureUrl: 'https://picsum.photos/200'
      },
      {   
        id: '2',
        title: 'Termometro',
        price: 850,
        pictureUrl: 'https://picsum.photos/200'
      },
      {   
        id: '3',
        title: 'Oximetro',
        price: 850,
        pictureUrl: 'https://picsum.photos/200'
      },
      {   
        id: '4',
        title: 'Baumanometro',
        price: 850,
        pictureUrl: 'https://picsum.photos/200'
      },

    ]


    const [ itemProducts, setItems] = useState([])

    //Funcion getItems, simula promise para consulta de un servidor
    const getItems = (data) => {
        return new Promise((res, rej) => {
          setTimeout(() => {
            return res(data)
          }, 2000)
        })
    }

    //useEffcect para dispara funcion getItems
    useEffect(() => {
        getItems( items ).then(result => {
            console.log(result)
            setItems(result);
        });
    }, [])

    
    return itemProducts.map((product) => (
        <Item 
        id={product.id}
        title={product.title}
        price={product.price}
        pictureUrl={product.pictureUrl}
        
        />

    )

    ) 

}


