
import {NavBar}from './components/navbar'
import {ItemListContainer} from './components/itemlistcontainer'

function App() {
  return (
    <div>
    <NavBar/> 
    <ItemListContainer 
    gretting='Welcome to MyDoctor, The site that takes care of yourself'/>
</div>
  );
}

export default App;
