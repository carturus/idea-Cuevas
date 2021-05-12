
import {ItemCount} from './itemcount'
import React, { useState,useContext} from 'react';
import {Link} from 'react-router-dom'
import {CartContext} from '../context/cartContex'
export  const ItemDetail=({id,title,pictureUrl,price,description})=>{
    const [initial,setInitial]=useState(2);
    const [stock,setStock]=useState(5);
    const [showItemCount,setShowItemCount]=useState(true);
    const [showButtonBuy,setShowButtonBuy]=useState(false);
    const [cantidad,setCantidad] = useState(initial);
    const {addToCart}=useContext(CartContext)

    const addCart=(nCount)=> {
        setShowItemCount(false)
        setShowButtonBuy(true)
        setCantidad(nCount) 
    
}


    return(
      
        

        <div
        style={{
            display:"flex",
            flexDirection:"column",
            alignItems:"center",
            color:"#03417a",
        }}
        >
        
        <h4>{title}</h4>
        <h4 >{price}</h4>
        <img alt='producto'src={pictureUrl}/>    
        <p>{description}</p>   
        <div> { showButtonBuy ? <button onClick={()=>addToCart({
    id: id,
    title: title,
    quantity:cantidad
  
},cantidad)}>
    <Link to='/cart'>Comprar, Tiene {cantidad} productos</Link></button>: null }</div>
       

        <div> { showItemCount ? <ItemCount stock={stock} initial={initial} onAdd={addCart}/>: null }</div>
        </div>

    )

}