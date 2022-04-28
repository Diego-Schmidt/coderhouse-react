import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
      <NavBar />
      <main>
      <ItemListContainer greeting="Bienvenido al Menú de Habemus Papa!"/>
      <hr />
      <div className="back1">
<div className="back1 back2">
<div className="back1 back3">
			</div>
          </div>
         </div>
      </main>
    </>
  );
}

export default App;
