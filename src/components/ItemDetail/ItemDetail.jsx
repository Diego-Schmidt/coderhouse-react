import { Badge } from 'react-bootstrap';
import ItemCount from '../ItemCount/ItemCount';
// import css from './ItemDetail.css';






function ItemDetail({  detalle } ) {
  return (
    <div className="container col-xxl-8 px-4 py-5">
    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div className="col-10 col-sm-8 col-lg-6">
        <img src={detalle.picture} className="d-block mx-lg-auto img-fluid" alt={detalle.name} width="700" height="500" loading="lazy" />
      </div>
      <div className="col-lg-6">
        <h1 className="display-5 fw-bold lh-1 mb-3">{detalle.name}</h1>
        <p className="lead">{detalle.description}</p>
        
        <Badge bg="success">{detalle.price} $</Badge>
    <Badge>Stock {detalle.stock}</Badge>
          <ItemCount stock={detalle.stock} initial={1} itemName={detalle.name} />
        
      </div>
    </div>
  </div>
  )
}

export default ItemDetail