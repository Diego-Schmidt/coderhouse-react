import React from 'react';
import { Spinner, Container } from 'react-bootstrap';
import habemus from '../../assets/images/habemuspet.webp';

function LoadingSpinner() {
  return (
    <Container><img src={habemus} alt="habemus" className="img-fluid" /><Spinner animation="border" role="status">
  <span className="visually-hidden">Cargando...</span>
</Spinner>

</Container>
  )
}

export default LoadingSpinner