
import {ItemCount} from './itemcount'
import React, { useState} from 'react';
import {Link} from 'react-router-dom'

export  const ItemDetail=(props)=>{
    const [initial,setInitial]=useState(2);
    const [stock,setStock]=useState(5);
    const [showItemCount,setShowItemCount]=useState(true);
    const [showButtonBuy,setShowButtonBuy]=useState(false);
    const [cantidad,setCantidad] = useState(initial);

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
        
        <h4>{props.title}</h4>
        <h4 >{props.price}</h4>
        <img alt='producto'src={props.pictureUrl}/>    
        <p>{props.description}</p>   
        <div> { showButtonBuy ? <button><Link to='/cart'>Terminar Compra, Tiene {cantidad} productos</Link></button>: null }</div>
        <div> { showItemCount ? <ItemCount stock={stock} initial={initial} onAdd={addCart}/>: null }</div>
        </div>

    )

}