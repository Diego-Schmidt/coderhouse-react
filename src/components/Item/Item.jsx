import React from 'react'
import { Card, Badge } from 'react-bootstrap';
import ItemCount from '../ItemCount/ItemCount';






function Item({ stock, name, price, ingredients, picture } ) {
  return (
    <Card className="bg-warning shadow-lg p-3 mb-3 mr-2 ml-2 rounded">
    <Card.Title>{name}</Card.Title>
    <Card.Img variant="top" src={picture} />
    <Card.Body>
    <Card.Text>
        {ingredients}
    </Card.Text>
    <Badge bg="success">{price} $</Badge>
    <Badge>Stock {stock}</Badge>
    </Card.Body>
    <ItemCount stock={stock} initial={1} itemName={name} />
  </Card>
   
  )
}

export default Item