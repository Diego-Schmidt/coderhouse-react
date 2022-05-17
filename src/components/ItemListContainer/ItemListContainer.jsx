import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import ItemList from '../ItemList/ItemList.jsx';
import { useParams } from 'react-router-dom';
import { getAllItems as getProductos, getItemsByCategory} from '../../data'


function ItemListContainer( {greeting, items} ) {
    const [productos, setProductos] = useState([]);
    const { categoryid } = useParams();
   
    useEffect(() => {
        if (categoryid === undefined) {
    getProductos().then(respuestaPromise => {
        setProductos(respuestaPromise);
    }); } else {
    getItemsByCategory(categoryid).then(respuestaPromise => {
        setProductos(respuestaPromise);
    }); }   
    }, [categoryid]);

    return (
        <section id="menu" className="py-5 text-center container">
        <div className="row py-lg-5">
            <div className="col-12">
            <div className="lead text-muted">{greeting}</div>
            <div className="lead text-muted">{categoryid}</div>
            <div>
              <Button className="btn btn-primary my-2">Ver promos</Button>
              <Button className="btn btn-secondary my-2">Combos</Button>
            </div>
           
          </div>
        </div>
        <div className="album py-5">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-1 row-cols-md-3 row-cols-lg-3 g-3">
          <ItemList items={productos} />
          </div></div></div>
      </section>
      
      
        );
    }
    
    export default ItemListContainer;