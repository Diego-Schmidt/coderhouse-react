import React from 'react'
import { Button, Card, Badge } from 'react-bootstrap';
// import ItemCount from '../ItemCount/ItemCount';
import {LinkContainer} from 'react-router-bootstrap';

function Item({ item, stock, name, price, ingredients, picture, category } ) {
  
  return (
    <Card className="bg-warning shadow-lg p-3 mb-3 mr-2 ml-2 rounded">
    <Card.Title>{category}/{name}</Card.Title>
    <Card.Img variant="top" src={picture} />
    <Card.Body>
    <Card.Text>
      Ingredientes: {ingredients}
    </Card.Text>
    <Badge bg="success">{price} $</Badge>
    <p></p>
    <Badge>Stock {stock}</Badge>
    </Card.Body>
    {/* <ItemCount stock={stock} initial={1} itemName={name} /> */}
    <LinkContainer to={`/item/${item}`}><Button className="btn btn-info">Ver detalles</Button></LinkContainer>
  </Card>
   
  )
}

export default Item