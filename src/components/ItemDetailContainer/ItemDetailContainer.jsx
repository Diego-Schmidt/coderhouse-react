import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import productosDB from '../../data/productosDB.js';
import ItemDetail from '../ItemDetail/ItemDetail.jsx';
import { useParams } from 'react-router-dom';

function getProducto() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productosDB);
        }, 2000);
    });
}

function ItemDetailContainer( {greeting, items} ) {
    const [producto, setProducto] = useState([]);
    const { itemid } = useParams();
    useEffect(() => {
    getProducto(itemid).then(respuestaPromise => {
        setProducto(respuestaPromise[itemid]);
    });
    // .catch(errorPromise => {
    //     console.error(errorPromise);
    // });
    }, [itemid]);

    return (
        <section id="menu" className="py-5 text-center container">
        <div className="row py-lg-5">
            <div className="col-12">
            <h1 className="fw-light">{producto.name}</h1>
            <p className="lead text-muted">{producto.category}</p>
            <p className="lead text-muted">Detalle del producto</p>
            
         
           
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