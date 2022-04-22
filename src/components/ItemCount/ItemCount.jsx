import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import hamburguesa from '../../assets/images/hamburguesa.png';
import swal from 'sweetalert';
import './ItemCount.css';

const ItemCount = ({stock, initial, onAdd}) => {
  const [count, setCount] = useState(initial)

  const handleAgregar = () => {
    if (count < stock) {
      setCount(count + 1)
      
      
    } else {
        swal("No hay stock suficiente", "", "error");
    } 

  }

  const handleRestar = () => {
    if (count > initial) {
      setCount(count - 1)
      
      
    }
  }

const handleOnAdd = () => {
        swal(count + " items agregados al carrito", "", "success");
    } 


  return (
    <>
      <Container>
      <div className="card producto shadow-lg p-3 mb-5 bg-warning rounded">
  <img src={hamburguesa} className="card-img-top" alt="hamburguesa" />
  <div className="card-body">
    <h5 className="card-title">Hamburguesa con Cheddar</h5>
    <p className="card-text">Hamburguesa con queso cheddar acompañada de batatas fritas</p>
    <div className="input-group mb-3">
        <div className="input-group-prepend">
          <Button onClick={handleRestar} className="text-white btn btn-outline-secondary">-</Button>
        </div>
        <input type="text" className="form-control text-center" readOnly value={count} />
        <div className="input-group-append">
          <Button onClick={handleAgregar} className="text-white btn btn-outline-secondary">+</Button>
        </div>
      </div>
      <Button onClick={handleOnAdd} className="text-white btn btn-outline-secondary">Agregar al carrito</Button>
  </div>
</div>
        </Container>
    </>
  )
}

export default ItemCount