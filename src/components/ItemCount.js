import React, { useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export const ItemCount =({initial, stock ,onAdd})=>{
    const [count, setCount] = useState(initial);
    const add=()=>{
        if(count===stock){
            handleClick(count);
            
        }else{
           setCount(count+1)
        }
        } 
    const remove=()=>{if(count<=stock && count>initial) setCount(count-1)}
    const handleClick =()=>onAdd(count)  


    return(

   <div >
                  <div className="d-flex justify-content-between"> 
                    <button onClick={remove} className="btn btn-primary">-</button>
                    <span>{count}</span>
                    <button onClick={add} className="btn btn-primary">+</button> 
                    </div>    
                    <button  onClick={handleClick} className="btn btn-light">Agregar al carrito</button>   
    </div>

        


     
      )   

}