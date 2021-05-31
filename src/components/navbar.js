
import {Link} from 'react-router-dom'
import {CartWidget} from './CartWidget'
import {Brand} from './Brand'
import React, { useContext} from 'react';
<<<<<<< HEAD
import {CartContext} from '../context/CartContex'

=======
import {CartContext} from '../context/cartContex'
import 'bootstrap/dist/css/bootstrap.min.css';
>>>>>>> 1231b86 (Desafio 11-item collection 2)


export const NavBar = (props) => {
  const {cartQuantity}=useContext(CartContext)
return(
    <nav className="navbar navbar-light">
          <Link to = '/'><Brand/> MyDoctor </Link>
          {props.categories.map((category,index)=>
    
            <Link key={index} to = {`/categories/${category.description}`}>{category.description}</Link>
          )
          
          }
          {cartQuantity? <Link to = '/cart'><CartWidget/> </Link>:null}
  </nav>
  
)
}
