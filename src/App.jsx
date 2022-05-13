import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Cart from './components/Cart/Cart';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes }  from 'react-router-dom';
import { CartContextProvider } from './store/CartContext';


function App() {
  return (
    <>
    <CartContextProvider>
    <BrowserRouter basename="/coderhouse-react">
      <NavBar />
      <main>
      <Routes>
        <Route path="/item/:itemid" element={<ItemDetailContainer greeting="Detalle de producto"/>} />  
        <Route path="/" element={<ItemListContainer greeting="Menú de Habemus Papa!"/>} />
        <Route path="/cart" element={<Cart greeting="Este es su carrito"/>} / >
        {/* <Route path="/coderhouse-react" exact component={<ItemListContainer greeting="Bienvenido a Habemus Papa!"/>} /> */}
        <Route path="/category/:categoryid" element={<ItemListContainer greeting="Categoría"/>} />
      </Routes>
      <hr />
      <div className="back1">
<div className="back1 back2">
<div className="back1 back3">
			</div>
          </div>
         </div>
      </main>
      </BrowserRouter>
      </CartContextProvider>
    </>
  );
}

export default App;
