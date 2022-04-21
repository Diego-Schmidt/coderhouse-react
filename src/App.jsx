import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Saludos"/>
      <header className="App-header">
      
      </header>
      <main>
        
      </main>
    </div>
  );
}

export default App;
