import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import productosDB from '../../data/productosDB.js';
import ItemList from '../ItemList/ItemList.jsx';
import { useParams } from 'react-router-dom';

function getProductos(categoryid) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (categoryid) {
            const arrayFiltered = productosDB.filter((item) => {
                return item.category === categoryid;
            });
            resolve(arrayFiltered);
            } else {
            resolve(productosDB);
            }
        }, 2000);
    });
}

function ItemListContainer( {greeting, items} ) {
    const [productos, setProductos] = useState([]);
    const { categoryid } = useParams();
    
    useEffect(() => {
    getProductos(categoryid).then(respuestaPromise => {
        setProductos(respuestaPromise);
    });
    // .catch(errorPromise => {
    //     console.error(errorPromise);
    // });
    }, [categoryid]);

    return (
        <section id="menu" className="py-5 text-center container">
        <div className="row py-lg-5">
            <div className="col-12">
            <h1 className="fw-light">Menú</h1>
            <p className="lead text-muted">{greeting}</p>
            <p className="lead text-muted">{categoryid}</p>
            <p>
              <Button className="btn btn-primary my-2">Ver promos</Button>
              <Button className="btn btn-secondary my-2">Combos</Button>
            </p>
           
          </div>
        </div>
        <div className="album py-5 bg-warning">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-1 row-cols-md-3 row-cols-lg-3 g-3">
          <ItemList items={productos} />
          </div></div></div>
      </section>
      
      
        );
    }
    
    export default ItemListContainer;