
import {Link} from 'react-router-dom'
import React from 'react';

export const Item = (props)=>{
  
    return(
        
        <div className="card text-center" style={{ width: "12rem" }}>
            <Link to = {`/itemdetail/${props.id}`}>
                <img className="card-img-top" src={props.pictureUrl} height="200" alt="Card item"/>
                <h4 className="card-title">{props.title}</h4>
            </Link>
            <div className="card-body d-flex flex-column align-items-center">
                
                 <p className="card-text">{props.category}</p>
                 <p className="card-text">{`${props.price} mxn`}</p>
            </div>
        </div>
   
    )
 }




