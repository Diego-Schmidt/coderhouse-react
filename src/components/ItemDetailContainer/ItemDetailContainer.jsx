import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetail from '../ItemDetail/ItemDetail.jsx';
import { useParams } from 'react-router-dom';
import { getItem as getProducto } from '../../data'

function ItemDetailContainer( {greeting, items} ) {
    const [producto, setProducto] = useState([]);
    const { itemid } = useParams();
    useEffect(() => {
    getProducto(itemid).then(respuestaPromise => {
        setProducto(respuestaPromise);
    });
    // .catch(errorPromise => {
    //     console.error(errorPromise);
    // });
    }, [itemid]);

    return (
        <section id="menu" className="py-5 text-center container">
        
        <div className="album bg-degrade py-5">
        <div className="container">
          <div className="">
          <ItemDetail detalle={producto} />
          </div></div></div>
      </section>
      
      
        );
    }
    
    export default ItemDetailContainer;