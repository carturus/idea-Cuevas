
import {ItemCount} from './ItemCount'
import {ButtonCart} from './ButtonCart'
import React, { useState,useEffect} from 'react';

export  const ItemDetail=({id,title,imageId,price,description,stock})=>{
    
    const [initial,setInitial]=useState(1);
    const [itemStock,setItemStock]=useState(stock);
    const [showItemCount,setShowItemCount]=useState(true);
    const [showButtonBuy,setShowButtonBuy]=useState(false);
    const [cantidad,setCantidad] = useState(initial);
   

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
if(itemStock===0){
    setCantidad(0)
    setShowItemCount(false)
    setShowButtonBuy(true)
}


},[itemStock])


    return(
   
<<<<<<< HEAD
        <div className="card d-flex text-center" >
             <div className="card-header">{title}</div>
            
            <div className="card-body d-flex flex-column align-items-center">
            <img  width="200" height="200" src={imageId} alt="item"/>
                <h4 className="card-text" >Precio ${price} mxn</h4>
                 <p className="card-text">{description}</p>   

          {showButtonBuy?<ButtonCart id={id}  title={title} price={price} stock={stock} cantidad={cantidad} imageId={imageId}></ButtonCart>:null}
=======
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
    stock:stock,
    quantity:cantidad
  
},cantidad)}>
    <Link to='/cart'>Comprar, Tiene {cantidad} productos</Link></button>: null }</div>
>>>>>>> 1231b86 (Desafio 11-item collection 2)
       
          { showItemCount>0 ? <ItemCount stock={itemStock} initial={initial} onAdd={addCart}/>: null } 
          </div>
        </div>

    )

}