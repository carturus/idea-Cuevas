
import {ItemList} from './itemlist'
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import  items from './datos/items.json'

export const ItemListContainer =(props)=>{
  const {categoryId}=useParams()
  console.log(categoryId);

const [ list, setList] = useState([])

//Funcion getItems, simula promise para consulta de un servidor
const getList= (data) => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        console.log(categoryId)
        console.log(items.filter(item => item.category==categoryId))
        return res(data)
      }, 2000)
    })
}

useEffect(() => {
  getList(categoryId?(items.filter(item => item.category==categoryId)):items ).then(result => {
      console.log(result)
      setList(result);
  });
}, [categoryId])



    return(
        <div >
          
        <h2>{props.gretting}  </h2>  

          <div style={{
          display:'flex',
          justifyContent:'space-around',
          flexWrap:'wrap',
        }}>
        
        <ItemList list={list}/>
        </div>
          </div>
    )
}