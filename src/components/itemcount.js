import React, { useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export const ItemCount =({stock,initial})=>{
    
    //Estado count, para guradar numero de items
    const [count, setCount] = useState(initial);
    
    //Agregar productor al carrito
    const onAdd=()=> alert(`Se agregaron ${count} productos`)

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

    <div className="card text-white bg-primary" style={{maxWidth:'8rem', maxHeight:'10rem'}}>
    <div className="card-body">
    <p>{count}</p>
    <a href ="#" onClick={remove} className="btn btn-light">-</a>
    <a href ="#" onClick={add} className="btn btn-light">+</a>
    </div>
    <a href ="#" onClick={onAdd} className="btn btn-light">Add</a>
  
</div>
        
     
      )   

}