
import {Link} from 'react-router-dom'
import {CartWidget} from './CartWidget'
import {Brand} from './Brand'
import React, { useContext} from 'react';
import {CartContext} from '../context/CartContex'



export const NavBar = (props) => {
  const {cartQuantity}=useContext(CartContext)
return(
    <nav className="navbar navbar-light">
          <Link to = '/'><Brand/> MyDoctor </Link>
          {props.categories.map((category,index)=>
    
            <Link key={index} to = {`/categories/${category.description}`}>{category.description}</Link>
          )
          
          }
          <Link to = '/cart'><CartWidget/> </Link>
  </nav>
  
)
}
