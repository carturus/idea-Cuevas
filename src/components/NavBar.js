
import {Link} from 'react-router-dom'
import {CartWidget} from './CartWidget'
import {Brand} from './Brand'
import React from 'react';



export const NavBar = (props) => {
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
