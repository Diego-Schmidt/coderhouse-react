import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
      <ItemListContainer greeting="Bienvenido al Menú de Habemus Papa!"/>
      <hr />
      </main>
      
            	     <div className="back1">
<div className="back1 back2">
<div className="back1 back3">
			</div>
          </div>
         </div>
    </div>
  );
}

export default App;
