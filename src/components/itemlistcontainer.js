
import {ItemList} from './itemlist'


export const ItemListContainer =(props)=>{


    return(
        <div
        style={{
            textAlign:"center",
            color:'white',
            display:'flex',
            justifyContent:'space-around',
          }}
        >
          {/* {props.gretting}   */}
          
          <ItemList/>
         </div>
    )
}