
import {getFirestore} from '../firebase'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router';
export const Demo=() => {
    const {categoryId}=useParams()
    const [items,setItems]=useState([])
    const [idItem,setIdItem]=useState([])

useEffect(() => {
    const db=getFirestore();
    let itemCollection=db.collection('items');

    //let producto=itemCollection.doc(1);
   
    if(categoryId){
        itemCollection=itemCollection.where('categoryId','==',categoryId)   
    }


    itemCollection.get().then((querySnapshot)=>{
            if(querySnapshot.size===0){
                console.log('No results');  
            }
            setItems(querySnapshot.docs.map((doc)=>({...doc.data(), id: doc.id})))
            setIdItem(querySnapshot.docs.map((doc)=>doc.id))
            
    } ).catch((error)=>{
        console.log("Error searching items",error)
    })
}, [categoryId])


    return (
        
<div>
   
        { 
        items.map( (item)=>

            <p> title: {item.title}  otro if {item.id} id:{idItem[items.indexOf(item)]}</p>

           )
           }
 
       </div>
    )
}