
import {Link} from 'react-router-dom'
import React from 'react';

export const Item = (props)=>{
  
    return(
    <div
    style={{
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        color:"#03417a",
        borderColor:"#03417a",
        borderStyle:"solid",
    }}
    >

    <Link to = {`/itemdetail/${props.id}`}><h3 >{props.title}</h3></Link>
    <p>{props.category}</p>
    <img alt='producto'src={props.pictureUrl} width="200" height="200"></img>
    <h3>{`${props.price} mxn`}</h3>

     </div>
  
    )
 }




