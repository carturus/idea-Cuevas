
import {ItemCount} from './ItemCount'
import {ButtonCart} from './buttonCart'
import React, { useState,useEffect} from 'react';

export  const ItemDetail=({id,title,imageId,price,description,stock})=>{
    // Nunca estas cambiando este valor, porque es un estado?
    //En las anteriores entregas se habia considerado que inital pudiera cambiar de valor, por las reglas de negocio 
    //const [initial,setInitial]=useState(1);
    //Aqui la dejo como una constante ya que nunca se hizo esa logica
    const initial=1;
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
   
        <div className="card d-flex text-center" >
             <div className="card-header">{title}</div>
            
            <div className="card-body d-flex flex-column align-items-center">
            <img  width="200" height="200" src={imageId} alt="item"/>
                <h4 className="card-text" >Precio ${price} mxn</h4>
                 <p className="card-text">{description}</p>   

          {showButtonBuy?<ButtonCart id={id}  title={title} price={price} stock={stock} cantidad={cantidad} imageId={imageId}></ButtonCart>:null}
       
          { showItemCount>0 ? <ItemCount stock={itemStock} initial={initial} onAdd={addCart}/>: null } 
          </div>
        </div>

    )

}