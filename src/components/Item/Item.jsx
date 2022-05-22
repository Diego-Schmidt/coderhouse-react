import React from 'react'
import { Button, Card, Badge } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import useCartContext from '../../store/CartContext';
import  './Item.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

function Item({ item, stock, name, price, ingredients, picture, category } ) {
  const { getItemQuantity, isInCart } = useCartContext();
  return (
    <Card className="bg-warning shadow-lg p-3 mb-3 mr-2 ml-2 rounded">
    <Card.Title>{category}/{name} </Card.Title>
    <span className="position-absolute top-4 end-4 translate-middle badge rounded-pill bg-info">{isInCart(item) ?
    <><div className="cart-icon2"><FontAwesomeIcon icon={faCartShopping} size="1x" color="black" /><div className="mostrar-cantidadItem">{getItemQuantity(item)}</div></div></>
    :
    <><div className="cart-icon2"><FontAwesomeIcon icon={faCartShopping} size="1x" color="black" /><div className="mostrar-cantidadItem">0</div></div></>
}</span>
<LinkContainer to={`/item/${item}`}><Card.Img className="picHover" variant="top" src={picture} alt={name} /></LinkContainer>
    <Card.Body>
    
    <Card.Text>
      Ingredientes: {ingredients}
    </Card.Text>
    <Badge bg="success">{price} $</Badge>
    <Badge className="m-2">Stock {stock}</Badge>
    </Card.Body>
    <LinkContainer to={`/item/${item}`}><Button className="btn btn-info">Ver detalles</Button></LinkContainer>

  </Card>
    
  )
}

export default Item