import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList.jsx';
import { useParams } from 'react-router-dom';
import { getAllItems as getProductos, getItemsByCategory} from '../../data'
import LoadingSpinner from '../LoadingSpinner/';


function ItemListContainer( {greeting, items} ) {
    const [loading, setLoading] = useState(true);
    const [productos, setProductos] = useState([]);
    const { categoryid } = useParams();
   
    useEffect(() => {
        if (categoryid === undefined) {
    getProductos().then(respuestaPromise => {
        setProductos(respuestaPromise);
        setLoading(false);
    }); } else {
    getItemsByCategory(categoryid).then(respuestaPromise => {
        setProductos(respuestaPromise);
        setLoading(false);
    }); }   
    }, [categoryid]);
if(loading){
  return <section id="menu" className="py-5 text-center container">
        
  <div className="album bg-degrade py-5">
  <div className="container">
    <div className="">
    <LoadingSpinner />
    </div></div></div>
</section>
  
  
}
return (
        <section id="menu" className="py-2 text-center container slide-in-fwd-center">
        <div className="album py-5">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-1 row-cols-md-3 row-cols-lg-3 g-3">
          <ItemList items={productos} />
          </div></div></div>
           
      </section>
      
      
        );
    }
    
    export default ItemListContainer;