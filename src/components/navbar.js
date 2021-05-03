
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom'
import {CarWidget} from './carwidget'
import {Brand} from './brand'


export const NavBar = (props) => {

return(
    <nav className=" navbar navbar-light bg-light">
          <Link to = '/'><Brand/> MyDoctor </Link>
          {props.categories.map((category,index)=>
            <Link to = {`/category/${category.description}`}>{category.description}</Link>
          )}
          <Link to = '/'><CarWidget/> </Link>
  </nav>
  
)
}
