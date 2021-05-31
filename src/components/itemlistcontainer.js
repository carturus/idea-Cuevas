
import {ItemList} from './ItemList'
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import {getFirestore} from '../firebase'

export const ItemListContainer =(props)=>{

const {categoryId}=useParams()
    const [items,setItems]=useState([])

useEffect(() => {
    const db=getFirestore();
    let itemCollection=db.collection('items');
   
    if(categoryId){
        itemCollection=itemCollection.where('categoryId','==',categoryId)   
    }
    else{
        itemCollection=itemCollection.where('top','==',true)  
    }
    console.log(categoryId)
    itemCollection.get().then((querySnapshot)=>{
            if(querySnapshot.size===0){
                console.log('No results');  
            }
            setItems(querySnapshot.docs.map((doc)=>({...doc.data(), id: doc.id})))

    } ).catch((error)=>{
        console.log("Error searching items",error)
    })
}, [categoryId])


    return(
        <div>
          
          <div className="text-center mb-5 bg-light border">
             {categoryId===undefined?<h2 >Articulos TOP </h2>:<h2 >{categoryId}</h2>  }
          </div>
             <div className="d-flex justify-content-around">
        
                <ItemList  items={items}/>
             </div>
        </div>
    )
}