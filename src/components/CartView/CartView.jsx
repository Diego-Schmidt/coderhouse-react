import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Badge, Container } from 'react-bootstrap';
import useCartContext from '../../store/CartContext';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';


function CartView({ greeting }) {
    const { cart, removeFromCart, clearCart, itemsTotal, precioTotal } = useCartContext();

    const handleVaciar = () => {
      swal({
        position: 'center',
        icon: 'success',
        background: '#DFA822',
        title: `Carrito vaciado`,
        Button: false,
        timer: 2500
      })
      clearCart();
        } 

        const handleRemove = () => {
          cart.forEach(itemCart => {
          swal({
            position: 'center',
            icon: 'success',
            background: '#DFA822',
            title: `${itemCart.cant} ${itemCart.name} quitada del carrito`,
            Button: false,
            timer: 2500
          })
          removeFromCart(itemCart.id)
        })
        
            } 



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
    <div><Badge bg="info" className="m-3"><h6>Total de items: {itemsTotal()}</h6></Badge><Badge className="m-3" bg="info"><h6> Costo Total: {precioTotal()} $</h6></Badge><div></div><div><Link to="/">regresar al catálogo</Link></div> 
     </div>
   </div>
   <div className="album py-5 bg-warning">
     <div className="container">
       <div className="row row-cols-1 row-cols-sm-1 row-cols-md-3 row-cols-lg-3 g-3">
        {cart.map( itemCart => {
        return (
              <Container key={itemCart.id}>
                <Card className="bg-warning shadow-lg p-3 mb-3 mr-2 ml-2 rounded text-center">
                  <Card.Title>{itemCart.name} x{itemCart.cant}</Card.Title>
                  <Card.Img variant="top" src={itemCart.picture} />
                  <Card.Body>
                    <Card.Text> {itemCart.ingredients} </Card.Text>
                    <Badge bg="success"><h6>x1 {itemCart.price} $</h6></Badge>
                    <p></p>
                    <Badge bg="info"><h6>x{itemCart.cant} {itemCart.price * itemCart.cant} $</h6></Badge>
                    <p></p>
                    <Button onClick={handleRemove} className="btn btn-danger w-50">Eliminar</Button>
                  </Card.Body>
                </Card>
              </Container>
        )
      
      })}
      </div>
            </div>
            
          </div>
          <Button className="m-3 bg-danger" onClick={handleVaciar}> Vaciar carrito</Button><Button className="bg-success m3">Pagar</Button>
        </section>
    )
  }
}

export default CartView