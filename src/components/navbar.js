
import 'bootstrap/dist/css/bootstrap.min.css';

import {CarWidget} from './carwidget'


export const NavBar = () => {

return(
    <nav className=" navbar navbar-light bg-light">
          <a className="navbar-brand" href="#MyDoctor"><CarWidget/> MyDoctor</a>
          <a className="nav-link" href="#Uniformes">Uniformes</a>
          <a className="nav-link" href="#Equipos">Equipos</a>
          <a className="nav-link" href="#Materiales">Materiales</a>        
          <a className="nav-link" href="#Mi_cuenta">Mi Cuenta</a>
  </nav>
  
)
}
