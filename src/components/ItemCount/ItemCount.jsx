import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import swal from 'sweetalert';
import './ItemCount.css';



const ItemCount = ({stock, initial, onAdd, itemName}) => {
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
        swal(count + " " + itemName + " agregado al carrito", "", "success");
    } 


  return (
    <>  
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
    </>
  )
}

export default ItemCount