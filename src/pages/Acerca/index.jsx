import React from 'react'
import cheff from '../../assets/images/cheff.webp';
import cheff2 from '../../assets/images/cheff2.webp';
import owner from '../../assets/images/owner.webp';
import owner2 from '../../assets/images/owner2.webp';
import vvd from '../../assets/images/vvd.webp';
import habeft from '../../assets/images/habeft.webp';
import { Link } from 'react-router-dom';
import '../../assets/css/animaciones.css'
import LoadingSpinner from '../../components/LoadingSpinner';

function Acerca() {
    document.title = 'Habemus Papa! Acerca de Nosotros';
    if(habeft === undefined){
        return <section id="menu" className="py-5 text-center container">
        <div className="album bg-degrade py-5">
        <div className="container">
          <div className="">
          <LoadingSpinner />
          </div></div></div>
      </section>
    }
    return (
        <div className="slide-in-fwd-center">
        <div className="container marketing">
          <div className="row mx-auto align-middle text-center py-4">
            <div className="col-lg-4 mx-auto">
              <img src={cheff} className="img-fluid mx-auto" alt="cheffdehabemuspapajuanromanriquelme" />
              <h2>Nuestro Cheff <p>Juan Riquelme</p></h2>
              <p>Nuestro cheff Juan Román Riquelme estudió en francia para luego regresar a nuestras tierras y encontrarse con "la dueña" y fundar Habemus Papa! Foodtruck.</p>
              <p><Link to="" className="btn btn-secondary">Más info »</Link></p>
            </div>
            <div className="col-lg-4 mx-auto">
              <img src={cheff2} className="img-fluid mx-auto" alt="cheffdehabemuspapavictorvondoom" />
              <h2>Nuestro otro cheff <p>Victor Von Doom</p></h2>
              <p>Victor Van Doom, nuestro otro Cheff estrella, recibido de la mejor escuela de cocina de Alemania, viajó para visitar nuestro país y se quedó a vivir por la comida.</p>
              <p><Link to="" className="btn btn-secondary">Más info »</Link></p>
            </div>
            <div className="col-lg-4">
              <img src={owner} className="img-fluid mx-auto" alt="dueñadehabemuspapamaríaeugeniavidal" />
              <h2>La jefa <p>María Eugenia Vidal</p></h2>
              <p>María es la dueña de Habemus Papa! y con todos sus ahorros se compró un foodtruck hace varios años y llamó a Juan Román y Victor para fundar Habemus Papa! Foodtruck.</p>
              <p><Link to="" className="btn btn-secondary">Más info »</Link></p>
            </div>
          </div>
          {/* Nuestra ética */}
          <hr className="featurette-divider" />
          <div className="row featurette">
            <div className="col-md-7">
              <h2 className="featurette-heading">Habemus Papa! Foodtruck. <span className="text-muted"><p>From zero to hero.</p></span></h2>
              <p className="lead">Desde nuestros humildes inicios hasta convertirnos en el carrito más famoso del condado, una historia de superación, esfuerzo y esperanza, donde la visión de "La dueña" nos llevó a la excelencia en servicios de comida.</p>
            </div>
            <div className="col-md-5">
              <img src={owner2} className="img-fluid mx-auto" alt="dueñadehabemuspapamaríaeugeniavidal" />
            </div>
          </div>
          <hr className="featurette-divider" />
          <div className="row featurette">
            <div className="col-md-7 order-md-2">
              <h2 className="featurette-heading">Nuestra pasión es cocinar. <span className="text-muted"><p>Y se nota en la comida.</p></span></h2>
              <p className="lead">Todos nuestros platos están echos con pasión y cariño, con los mejores ingredientes disponibles, siempre estamos aprendiendo para superarnos y estar a la altura de lo que nuestros clientes nos piden.</p>
            </div>
            <div className="col-md-5 order-md-1">
              <img src={vvd} className="img-fluid mx-auto" alt="cheffdehabemuspapavictorvondoomcocinando" />
            </div>
          </div>
          <hr className="featurette-divider" />
          <div className="row featurette">
            <div className="col-md-7">
              <h2 className="featurette-heading">Habemus Papa! Foodtruck. <span className="text-muted"><p>Nuestro sueño</p></span></h2>
              <p className="lead">Estamos continuamente pensando nuevos retos y nuevas metas, nuestro sueño sobre ruedas nos llevará a donde tengamos que ir para seguir creciendo como personas y como profesionales de la comida, las papas fritas nos inspiraron y la gente nos sigue llevando a nuevas alturas, ya tenemos proyectado adquirir 6 nuevos footstrucks para llevar nuestro arte y trabajo a nuevas tierras.</p>
            </div>
            <div className="col-md-5">
              <img src={habeft} className="img-fluid mx-auto" alt="habemuspapafoodtruck" />
            </div>
          </div>
          <hr className="featurette-divider" />
          {/* fin de nuestra ética */}
        </div>
      </div>
  )
}

export default Acerca