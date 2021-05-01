
import { ItemDetailContainer } from './itemdetailcontainer'
import {ItemList} from './itemlist'


export const ItemListContainer =(props)=>{


    return(
        <div
        style={{
          display:'flex',
          flexDirection:'column'
        }}
        >
          {/* {props.gretting}   */}
          <div  style={{
          display:'flex',
          justifyContent:'space-around',
        }}>   <ItemList/></div>
      
          <ItemDetailContainer/>
          </div>
    )
}