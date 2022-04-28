import React from 'react'
import { Card, Badge } from 'react-bootstrap';
import hamburguesa from '../../assets/images/hamburguesa.png';





function Item({ name, price, description } ) {
  return (
    <Card className="bg-warning shadow-lg p-3 mb-3 mr-2 ml-2 rounded">
    <Card.Title>{name}</Card.Title>
    <Card.Img variant="top" src={hamburguesa} />
    <Card.Body>
    <Card.Text>
        {description}
    </Card.Text>
    <Badge bg="success">{price} $</Badge>
    </Card.Body>
   
  </Card>
   
  )
}

export default Item