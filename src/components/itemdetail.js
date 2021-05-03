
import {ItemCount} from './itemcount'

export  const ItemDetail=(props)=>{

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
        <img src={props.pictureUrl}/>
        <ItemCount stock={5} initial={1}/>
        <p>{props.description}</p>     
        </div>

    )

}