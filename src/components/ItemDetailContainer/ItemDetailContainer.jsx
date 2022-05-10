import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import productosDB from '../../data/productosDB.js';
import ItemDetail from '../ItemDetail/ItemDetail.jsx';
import { useParams } from 'react-router-dom';
// import css from './ItemDetailContainer.css';

function getProducto(itemid) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (itemid) {
            const arrayFiltered = productosDB.find((item) => {
                return item.id === itemid;
            });
            resolve(arrayFiltered);
            } else {
            resolve(productosDB);
            }
        }, 2000);
    });
}

function ItemDetailContainer( {greeting, items} ) {
    const [producto, setProducto] = useState([]);
    const { itemid } = useParams();
    useEffect(() => {
    getProducto(parseInt(itemid)).then(respuestaPromise => {
        setProducto(respuestaPromise);
    });
    // .catch(errorPromise => {
    //     console.error(errorPromise);
    // });
    }, [itemid]);

    return (
        <section id="menu" className="py-5 text-center container">
        
        <div className="album bg-degrade py-5 bg-warning">
        <div className="container">
          <div className="">
          <ItemDetail detalle={producto} />
          </div></div></div>
      </section>
      
      
        );
    }
    
    export default ItemDetailContainer;