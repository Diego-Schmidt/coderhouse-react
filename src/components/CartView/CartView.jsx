import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Badge, Container } from 'react-bootstrap';
import { useState } from 'react';
import { useContext, useEffect } from 'react';
import useCartContext from '../../store/CartContext';
import { Link } from 'react-router-dom';


function CartView({ greeting }) {
    const { cart, addToCart, removeFromCart, clearCart, isInCart } = useCartContext();
    console.log("CartView", cart);
    if (cart.length === 0) {
      return <section id="Carrito" className="py-5 text-center container">
      <div className="row py-lg-5">
          <div className="col-12">
          <p>No hay items en su carrito</p>
          <p></p>
          <Link to="/">regresar al menú</Link>
        </div>
      </div>
    </section>
}
else { 
  return (
    <section id="carrito" className="py-5 text-center container">
        <div className="row py-lg-5">
        <div className="col-12">
          <p>{greeting}</p>
          <p></p>
          <Link to="/">regresar al menú</Link>
          <p></p>
          <p><Button onClick={clearCart}>Vaciar carrito</Button></p>
        </div>
        </div>
        <div className="album py-5 bg-warning">
          
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-1 row-cols-md-3 row-cols-lg-3 g-3">
        {cart.map( itemCart => {
        return (
              <Container key={itemCart.id}>
                <Card className="bg-warning shadow-lg p-3 mb-3 mr-2 ml-2 rounded">
                  <Card.Title>{itemCart.name} x{itemCart.cant}</Card.Title>
                  <Card.Img variant="top" src={itemCart.picture} />
                  <Card.Body>
                    <Card.Text> {itemCart.ingredients} </Card.Text>
                    <Badge bg="success">Precio Unidad {itemCart.price} $</Badge>
                    <p></p>
                    <Badge bg="info">Precio x {itemCart.cant} {itemCart.price * itemCart.cant} $</Badge>
                  </Card.Body>
                  <Button onClick={() => removeFromCart(itemCart.id)} className="btn btn-danger">Eliminar</Button>
                </Card>
              </Container>
        )
      
      })}
      </div>
            </div>
          </div>
        </section>
    )
  }
}

export default CartView