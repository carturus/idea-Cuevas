
import {NavBar}from './components/NavBar'
import {CheckOut} from './components/CheckOut'
import {ItemListContainer} from './components/ItemListContainer'
import {Switch, Route, BrowserRouter} from 'react-router-dom'
import { ItemDetailContainer } from './components/ItemDetailContainer';
import {Cart} from './components/Cart'
import {CartProvider} from './context/CartContex'
import React from 'react';


function App() {

  const categories=[
    {id:1,
    description:"Uniformes",
    },
    {id:2,
      description:"Materiales",
    },
    {id:3,
    description:"Equipos",
    },  
  ]
  
  return (
    <div className='container-fluid'>
         <CartProvider>
            <BrowserRouter>
                <NavBar categories={categories}/> 
                <Switch>
                   <Route exact path='/'>
                       <ItemListContainer/>
                   </Route>
                   <Route path='/categories/:categoryId'>
                       <ItemListContainer/>
                   </Route>
                   <Route path='/itemdetail/:itemId'>
                       <ItemDetailContainer/>
                   </Route>
                   <Route path='/cart'>
                        <Cart/>
                   </Route> 
                   <Route path='/checkout'>
                       <CheckOut/>
                   </Route>

                </Switch>
            </BrowserRouter>
          </CartProvider>
     </div>
  );
}

export default App;
