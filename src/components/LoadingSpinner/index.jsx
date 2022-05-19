import { Spinner, Container } from 'react-bootstrap';
import habemus from '../../assets/images/habemuspet.webp';

function LoadingSpinner() {
  return (
    <Container><Spinner animation="border" role="status">
  <span className="visually-hidden">Cargando...</span>
</Spinner>
<img src={habemus} alt="habemus" className="img-fluid" />
</Container>
  )
}

export default LoadingSpinner