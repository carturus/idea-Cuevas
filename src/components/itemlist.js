import {Item} from './item'

import React, { useState, useEffect } from 'react';


export const ItemList = (props)=>{

           
    return props.list.map((item,index) => (
   
        <Item
        key={index}
        id={item.id}
        category={item.category}
        title={item.title}
        price={item.price}
        pictureUrl={item.pictureUrl}
        />
       
    )

    ) 
  

}


