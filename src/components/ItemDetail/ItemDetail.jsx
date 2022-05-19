import { useState } from 'react';
import { Badge, Spinner } from 'react-bootstrap';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
// import css from './ItemDetail.css';
import useCartContext from '../../store/CartContext';

function ItemDetail({  detalle } ) {
  const [isInCart, setIsInCart] = useState(false);
  const { addToCart, estaEnCarrito } = useCartContext();
  const { getItemQuantity } = useCartContext();
  function onAdd(count) {    
    
    setIsInCart(true);
    addToCart(detalle, count);
    
}

if(detalle.picture === undefined){
  return <Spinner animation="border" role="status">
  <span className="visually-hidden">Loading...</span>
  </Spinner>
  }

  return (
    <div className="container bootstrap snippets bootdey">
    <div className="row">
      <div className="col-sm-6 col-md-6 col-lg-6 push-bit">
        <img src={detalle.picture} width="700" heith="250" alt={detalle.name} className="img-fluid push-bit" />
        
      </div>
      <div className="col-sm-6 col-md-6 col-lg-6 push-bit text-center">
        <div className="clearfix py-3">
          <div className="pull-right">
          <h1><strong className="text-success">{detalle.name}</strong><br /></h1>
          <h3><strong className="text-success">{detalle.category}</strong><br /></h3>
            <span className="h2"><strong><Badge bg="success">Precio {detalle.price}$</Badge></strong></span>
          </div>
          <span className="h4">
          {estaEnCarrito(detalle.id) ? 
            <><small className="pe-1"><Badge>En carrito {getItemQuantity(detalle.id)}</Badge></small><small><Badge bg="info">stock {detalle.stock}</Badge></small></>
            :
            <><small className="pe-1"><Badge>En carrito 0</Badge></small><small><Badge bg="info">stock {detalle.stock}</Badge></small></>
          }
          </span>
        </div>
        <hr />
        <span>
          {detalle.description}
        </span>
        <span>
          {detalle.ingredients}
        </span>
        <hr />
        {isInCart? 
          <>
          {/* <ItemCount onAdd={onAdd} stock={detalle.stock} initial={1} itemName={detalle.name} /> */}
          <span></span>
          <Link to="/cart"><Badge bg="success"><h5>Ver carrito</h5></Badge></Link> 
          </>
          :
        <ItemCount onAdd={onAdd} stock={detalle.stock} initial={1} itemName={detalle.name}/>
        
      }
        
      </div>
    </div>
  </div>
  )
}

export default ItemDetail