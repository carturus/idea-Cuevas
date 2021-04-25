import React, { useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export const ItemCount =({stock,initial,onAdd})=>{
    
    //Estaso count, para guradar numero de items
    const [count, setCount] = useState(parseInt(initial));
    
    //Agregar productor al carrito
    function onAdd(){
  
        alert(`Se agregaron ${count} productos`)
      }
      
    //Incrementa items  
    function add(){
        if(count<stock){
             setCount(count+1)         
        }
    }
    //Decrementa items
    function remove(){
        if(count<=stock && count>initial){
             setCount(count-1)         
        }
    }

    return(

    <div className="card text-white bg-primary" style={{maxWidth:'10rem'}}>
    <div className="card-body">
    <h5 className="card-title">Items</h5>
    <p className="card-text text-black">{count}</p>
    <a onClick={add} className="btn btn-light">+</a>
    <a onClick={remove} className="btn btn-light">-</a>
    </div>
    <a onClick={onAdd} className="btn btn-light">Add</a>
  
</div>
        
     
      )   

}