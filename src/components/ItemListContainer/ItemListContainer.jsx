import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList.jsx';
import { useParams } from 'react-router-dom';
import { getAllItems as getProductos, getItemsByCategory} from '../../services/FireStore.js';
import LoadingSpinner from '../LoadingSpinner/';
import { Container, Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function ItemListContainer( {greeting, items} ) {
    const [loading, setLoading] = useState(true);
    const [productos, setProductos] = useState([]);
    const { categoryid } = useParams();
   
    useEffect(() => {
        if (categoryid === undefined) {
     document.title = 'Habemus Papa! Catálogo';       
    getProductos().then(respuestaPromise => {
        setProductos(respuestaPromise);
        setLoading(false);
    }); } else {
        document.title = `Habemus Papa! ${categoryid}`;
    getItemsByCategory(categoryid).then(respuestaPromise => {
        setProductos(respuestaPromise);
        setLoading(false);
    }); }   
    }, [categoryid]);
    
   function setCatPath(){
    if (categoryid) {
        return <Container className="d-flex text-center justify-content-center mb-10 pb-10 align-items-center p-5"><Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>catálogo</Breadcrumb.Item><Breadcrumb.Item active>{categoryid}</Breadcrumb.Item></Container>;
    }   else {
        return <Container className="d-flex text-center justify-content-center mb-10 pb-10 align-items-center p-5"><Breadcrumb.Item active>catálogo</Breadcrumb.Item></Container>;
    }
}


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
        <section id="menu" className="text-center container slide-in-fwd-center">
   <Container className="d-flex text-center justify-content-center mb-10 pb-10 align-items-center"><Breadcrumb>
   
{setCatPath()}
    </Breadcrumb></Container> 
        <div className="album">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-1 row-cols-md-3 row-cols-lg-3 g-3">
          <ItemList items={productos} />
          </div></div></div>
           
      </section>
      
      
        );
    }
    
    export default ItemListContainer;