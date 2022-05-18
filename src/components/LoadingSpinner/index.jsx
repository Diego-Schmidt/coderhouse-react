import { Spinner, Container } from 'react-bootstrap';

function LoadingSpinner() {
  return (
    <Container><Spinner animation="border" role="status">
  <span className="visually-hidden">Cargando...</span>
</Spinner></Container>
  )
}

export default LoadingSpinner