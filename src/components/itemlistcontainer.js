
import {ItemCount} from './itemcount'


export const ItemListContainer =(props)=>{


    return(
        <div
        style={{
            backgroundColor: 'cyan',
            textAlign:"center",
            padding:"100px",
            color:'white',
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
          }}
        >
          {props.gretting}  

            <ItemCount 
            stock="5"
            initial="2"    
          />
              
        </div>
    )
}