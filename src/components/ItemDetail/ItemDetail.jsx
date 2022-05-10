import { Badge} from 'react-bootstrap';
import ItemCount from '../ItemCount/ItemCount';
import css from './ItemDetail.css';






function ItemDetail({  detalle } ) {
  return (
    <div className="container bootstrap snippets bootdey">
    <div className="row">
      <div className="col-sm-6 col-md-6 push-bit">
        <a href="#" className="gallery-link"><img src={detalle.picture} width="700" heith="250" alt={detalle.name} className="img-fluid push-bit" /></a>
        
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
        <ItemCount stock={detalle.stock} initial={1} itemName={detalle.name} />
        
      </div>
    </div>
  </div>
  )
}

export default ItemDetail