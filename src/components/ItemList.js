import {Item} from './Item'
import React from 'react';

export const ItemList = ({items})=>{

           
    return items.map((item,index) => (
   
        <Item
        key={index}
        id={item.id}
        category={item.categoryId}
        title={item.title}
        price={item.price}
        pictureUrl={item.imageId}
        />
       
    )

    ) 
  

}


