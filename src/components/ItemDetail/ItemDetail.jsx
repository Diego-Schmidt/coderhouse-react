import React, { useState } from 'react';
import { Badge, Button, Container, Breadcrumb } from 'react-bootstrap';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import LoadingSpinner from '../LoadingSpinner/';
import useCartContext from '../../store/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';




function ItemDetail({  detalle } ) {
  
  const [isInCart, setIsInCart] = useState(false);
  const { addToCart, estaEnCarrito } = useCartContext();
  const { getItemQuantity } = useCartContext();
  function onAdd(count) {    
    
    setIsInCart(true);
    addToCart(detalle, count);
    
}

const catPath = `/category/${detalle.category}`;

if(detalle.picture === undefined){
  return <LoadingSpinner />
  }

  document.title = `Habemus Papa! ${detalle.category}/${detalle.name}`;

  return (
    <><div><Container className="d-flex text-center justify-content-center p-5"><Breadcrumb>
      <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>catálogo</Breadcrumb.Item>
      <Breadcrumb.Item linkAs={Link} linkProps={{ to: `${catPath}` }}>
        {detalle.category}
      </Breadcrumb.Item>
      <Breadcrumb.Item active>{detalle.name}</Breadcrumb.Item>
    </Breadcrumb></Container></div><div className="container bootstrap snippets bootdey slide-in-fwd-center">
        <div className="row">
          <div className="col-sm-6 col-md-6 col-lg-6 push-bit">
            <span className="position-absolute top-10 end-90 translate-middle badge rounded-pill bg-info">{estaEnCarrito(detalle.id) ?
              <><div className="cart-icon2"><FontAwesomeIcon icon={faCartShopping} size="3x" color="black" /><div className="mostrar-cantidadItem">{getItemQuantity(detalle.id)}</div></div></>
              :
              <><div className="cart-icon2"><FontAwesomeIcon icon={faCartShopping} size="3x" color="black" /><div className="mostrar-cantidadItem">0</div></div></>}</span>
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
            {isInCart ?
              <>
                {/* <ItemCount onAdd={onAdd} stock={detalle.stock} initial={1} itemName={detalle.name} /> */}
                <span></span>
                <ItemCount onAdd={onAdd} stock={detalle.stock} initial={1} itemName={detalle.name} />
                <Link className="ps-2" to="/cart"><Button>Ver carrito</Button></Link>
              </>
              :
              <ItemCount onAdd={onAdd} stock={detalle.stock} initial={1} itemName={detalle.name} />}

          </div>
        </div>
      </div></>
  )
}

export default ItemDetail