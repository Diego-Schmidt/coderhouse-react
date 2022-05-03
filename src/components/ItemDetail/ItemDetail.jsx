import { Card, Badge } from 'react-bootstrap';
import ItemCount from '../ItemCount/ItemCount';






function ItemDetail({  detalle } ) {
  return (
    <Card className="bg-warning shadow-lg p-3 mb-3 mr-2 ml-2 rounded">
    <Card.Title>Detalles de {detalle.name}</Card.Title>
    <Card.Img variant="top" src={detalle.picture} />
    <Card.Body>
    <Card.Text>
        {detalle.description}
    </Card.Text>
    <Badge bg="success">{detalle.price} $</Badge>
    <Badge>Stock {detalle.stock}</Badge>
    </Card.Body>
    <ItemCount stock={detalle.stock} initial={1} itemName={detalle.name} />
  </Card>
   
  )
}

export default ItemDetail