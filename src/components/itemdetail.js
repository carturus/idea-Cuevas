
import {ItemCount} from './itemcount'
import React, { useState,useContext,useEffect} from 'react';
import {Link} from 'react-router-dom'
import {CartContext} from '../context/cartContex'
export  const ItemDetail=({id,title,imageId,price,description,stock})=>{
    
    const [initial,setInitial]=useState(1);
    const [itemStock,setItemStock]=useState(stock);
    const [showItemCount,setShowItemCount]=useState(true);
    const [showButtonBuy,setShowButtonBuy]=useState(false);
    const [cantidad,setCantidad] = useState(initial);
    const {addToCart}=useContext(CartContext)

   // Condicona stock
useEffect(() => {
 setItemStock(stock)
}, [stock])

 //Renderizado condicional
    const addCart=(nCount)=> {
        setShowItemCount(false)
        setShowButtonBuy(true)
        setCantidad(nCount)     
}
useEffect(()=>{
if(itemStock==0){
    setCantidad(0)
    setShowItemCount(false)
    setShowButtonBuy(true)
}


},[itemStock])


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
        <img alt='producto'src={imageId} width="200" height="200"/>    
        <p>{description}</p>   
        <div> { showButtonBuy ? <button onClick={()=>addToCart({
    id: id,
    title: title,
    price: price,
    quantity:cantidad
  
},cantidad)}>
    <Link to='/cart'>Comprar, Tiene {cantidad} productos</Link></button>: null }</div>
       
        <div> { showItemCount>0 ? <ItemCount stock={itemStock} initial={initial} onAdd={addCart}/>: null }</div>
        </div>

    )

}