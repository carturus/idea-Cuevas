export const ItemListContainer =(props)=>{
    return(
        <div
        style={{
            backgroundColor: 'cyan',
            textAlign:"center",
            padding:"100px",
            color:'white'
          }}
        >
            
            {props.gretting}
           
        </div>
    )
}