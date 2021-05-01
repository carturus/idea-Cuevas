
export  const ItemDetail=(props)=>{

    return(
        <div
        style={{
            display:"flex",
            flexDirection:"column",
            alignItems:"center",
        }}
        >
        <h4 style={{color:"#03417a"}}>{props.key}</h4>
        <h4 style={{color:"#03417a"}}>{props.title}</h4>
        <h4 style={{color:"#03417a"}}>{props.price}</h4>
        <img src={props.pictureUrl}/>
        <p style={{color:"#03417a"}}>{props.description}</p>
        </div>

    )

}