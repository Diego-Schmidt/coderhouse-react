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
    <Card.Img variant="top" src={picture} />
    <Card.Body>
    <Card.Text>
      Ingredientes: {ingredients}
    </Card.Text>
    <Badge bg="success">{price} $</Badge>
    <p></p>
    <Badge>Stock {stock}</Badge>{isInCart(item) ?
    <><div className="cart-icon2"><FontAwesomeIcon icon={faCartShopping} size="1x" color="black" /><div className="mostrar-cantidadItem">{getItemQuantity(item)}</div></div></>
    :
    <div className="mostrar-cantidad2 d-none">{getItemQuantity(item)}</div>
}
    </Card.Body>
    <LinkContainer to={`/item/${item}`}><Button className="btn btn-info">Ver detalles</Button></LinkContainer>

  </Card>
    
  )
}

export default Item