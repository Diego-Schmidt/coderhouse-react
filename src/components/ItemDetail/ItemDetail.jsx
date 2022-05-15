import { useState } from 'react';
import { Badge, Spinner } from 'react-bootstrap';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
// import css from './ItemDetail.css';
import useCartContext from '../../store/CartContext';






function ItemDetail({  detalle } ) {
  const [isInCart, setIsInCart] = useState(false);
  const { addToCart } = useCartContext();
  function onAdd(count) {    
    console.log(`Agregaste ${count} ${detalle.name} al carrito`);
    setIsInCart(true);
    addToCart(detalle, count);
    console.log("Agregado al carrito", detalle, count);

}

if (detalle.picture === undefined) { 
  return <Spinner animation="border" role="status"> <span className="visually-hidden">Cargando...</span></Spinner>
}
  return (
    <div className="container bootstrap snippets bootdey">
    <div className="row">
      <div className="col-sm-6 col-md-6 push-bit">
        <img src={detalle.picture} width="700" heith="250" alt={detalle.name} className="img-fluid push-bit" />
        
      </div>
      <div className="col-sm-6 col-md-6 push-bit">
        <div className="clearfix">
          <div className="pull-right">
          <h1><strong className="text-success">{detalle.name}</strong><br /></h1>
          <h3><strong className="text-success">{detalle.category}</strong><br /></h3>
            <span className="h2"><strong><Badge bg="success">Precio {detalle.price}$</Badge></strong></span>
          </div>
          <span className="h4">
            
            <small><Badge bg="info">stock {detalle.stock}</Badge></small>
          </span>
        </div>
        <hr />
        <p>
          {detalle.description}
        </p>
        <p>
          {detalle.ingredients}
        </p>
        <hr />
        { isInCart? 
          <>
          <ItemCount onAdd={onAdd} stock={detalle.stock} initial={1} itemName={detalle.name} />
          <p></p>
          <Link to="/cart"><Badge bg="success"><h5>Ver carrito</h5></Badge></Link> 
          </>
          :
        <ItemCount onAdd={onAdd} stock={detalle.stock} initial={1} itemName={detalle.name} />
        
      }
        
      </div>
    </div>
  </div>
  )
}

export default ItemDetail