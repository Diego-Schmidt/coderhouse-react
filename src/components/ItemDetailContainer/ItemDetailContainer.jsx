import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import productosDB from '../../data/productosDB.js';
import ItemDetail from '../ItemDetail/ItemDetail.jsx';

function getProducto() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productosDB);
        }, 2000);
    });
}

function ItemDetailContainer( {greeting, items} ) {
    const [producto, setProducto] = useState([]);

    useEffect(() => {
    getProducto().then(respuestaPromise => {
        setProducto(respuestaPromise[0]);
    });
    // .catch(errorPromise => {
    //     console.error(errorPromise);
    // });
    }, []);

    return (
        <section id="menu" className="py-5 text-center container">
        <div className="row py-lg-5">
            <div className="col-12">
            <h1 className="fw-light">Menú</h1>
            <p className="lead text-muted">Desafío Item Detail</p>
            <p>
              <Button className="btn btn-primary my-2">Ver promos</Button>
              <Button className="btn btn-secondary my-2">Combos</Button>
            </p>
           
          </div>
        </div>
        <div className="album py-5 bg-warning">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-1 row-cols-md-3 row-cols-lg-3 g-3">
          <ItemDetail detalle={producto} />
          </div></div></div>
      </section>
      
      
        );
    }
    
    export default ItemDetailContainer;