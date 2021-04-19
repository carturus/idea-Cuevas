
import 'bootstrap/dist/css/bootstrap.min.css';

import {CarWidget} from './carwidget'


export const NavBar = () => {

return(
    <nav className=" navbar navbar-light bg-light">
          <a className="navbar-brand" href="#"><CarWidget/> MyDoctor</a>
          <a className="nav-link" href="#Doctores">Doctores</a>
          <a className="nav-link" href="#Estudios">Estudios</a>
          <a className="nav-link" href="#Hospitales">Hospitales</a>        
          <a className="nav-link" href="#Mi_cuenta">Mi Cuenta</a>
  </nav>
  
)
}
