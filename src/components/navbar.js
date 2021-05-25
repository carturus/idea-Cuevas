
import {Link} from 'react-router-dom'
import {CarWidget} from './carwidget'
import {Brand} from './brand'
import React, { useContext} from 'react';
import {CartContext} from '../context/cartContex'
import 'bootstrap/dist/css/bootstrap.min.css';


export const NavBar = (props) => {
  const {cartQuantity}=useContext(CartContext)
return(
    <nav className=" navbar navbar-light bg-light">
          <Link to = '/'><Brand/> MyDoctor </Link>
          {props.categories.map((category,index)=>
    
            <Link key={index} to = {`/category/${category.description}`}>{category.description}</Link>
          )
          
          }
          {cartQuantity? <Link to = '/cart'><CarWidget/> </Link>:null}
  </nav>
  
)
}
