import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting={'Encuentra las mejores opciones para tu proyecto'} />
    </div>
  );
}

export default App
