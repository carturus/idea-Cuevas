

import {CartContext} from '../context/CartContex'
import {Link} from 'react-router-dom'
import React, {useContext} from 'react';

export const ButtonCart=({id,title,price,stock,cantidad,imageId})=>{
    const {addToCart}=useContext(CartContext)

    return(
        <Link to='/cart'>
         <button className="btn btn-light" onClick={()=>addToCart({
            id: id,
            title: title,
            price: price,
            stock:stock,
            quantity:cantidad,
            imageId:imageId
          
        },cantidad)}>
            Comprar {cantidad} productos</button></Link>

    )
}
