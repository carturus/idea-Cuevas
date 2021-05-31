
<<<<<<< HEAD
import {NavBar}from './components/NavBar'
import {CheckOut} from './components/CheckOut'
import {ItemListContainer} from './components/ItemListContainer'
=======
import {NavBar}from './components/navbar'
import {CheckOut} from './components/CheckOut'
import {ItemListContainer} from './components/itemlistcontainer'
import {Order} from './components/Order'
>>>>>>> 1231b86 (Desafio 11-item collection 2)
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

<<<<<<< HEAD
                </Switch>
            </BrowserRouter>
          </CartProvider>
     </div>
=======
  <Route path='/order'>
    <Order/>
  </Route> 


  <Route path='/checkout'>
    <CheckOut/>
  </Route>

  </Switch>
   </BrowserRouter>
   </CartProvider>
    </div>
>>>>>>> 1231b86 (Desafio 11-item collection 2)
  );
}

export default App;
