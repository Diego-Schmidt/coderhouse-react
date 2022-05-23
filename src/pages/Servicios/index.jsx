import React from 'react';
import { Link } from 'react-router-dom'; 
import servicioscta1 from '../../assets/images/servicioscta1.webp';
import servicioscta2 from '../../assets/images/servicioscta2.webp';
import '../../assets/css/animaciones.css'
import LoadingSpinner from '../../components/LoadingSpinner'

function Servicios() {
    document.title = 'Habemus Papa! Servicios';
    if(servicioscta2 === undefined){
        return <section id="menu" className="py-5 text-center container">
        <div className="album bg-degrade py-5">
        <div className="container">
          <div className="">
          <LoadingSpinner />
          </div></div></div>
      </section>
    }
  return (
    <section className="slide-in-fwd-center">
  <section>
    <article>
      {/* Call to action o hero para mobile */}
      <div className="px-4 py-2 my-5 text-center d-lg-none d-xl-none">
        <img className="d-block mx-auto img-fluid mb-4" src={servicioscta1} alt="nuestrocheffatufiesta" />
        <h1 className="display-5 fw-bold">¡Vamos a tu fiesta!</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">Llevamos a nuestro cheff a tu fiesta para que te prepare las mejores papas y burgers y quedes como el rey de las fiestas.</p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <Link to=""><button type="button" className="btn btn-primary btn-lg px-4 gap-3">Más info</button></Link>
            <Link to="/contacto"><button type="button" className="btn btn-outline-secondary btn-lg px-4">Contratar</button></Link>
          </div>
        </div>
      </div>
      {/* Call to action o hero para desktops */}
      <div className="container col-xxl-8 px-4 py-2 d-none d-lg-block">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img src={servicioscta1} className="d-block mx-lg-auto img-fluid" alt="llevamosnuestrosmeseros" width={700} height={500} loading="lazy" />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3">¡Vamos a tu fiesta!</h1>
            <p className="lead">Llevamos a nuestro cheff a tu fiesta para que te prepare las mejores papas y burgers y quedes como el rey de las fiestas.</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <Link to=""><button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Más info</button></Link>
              <Link to="/contacto"><button type="button" className="btn btn-outline-secondary btn-lg px-4">Contratar</button></Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  </section> <section>
    <article>
      {/* Hero para mobile */}
      <div className="px-4 py-2 my-5 text-center d-lg-none d-xl-none">
        <img className="d-block mx-auto img-fluid mb-4" src={servicioscta2} alt="nuestrosservicios" />
        <h1 className="display-5 fw-bold">¡Servicio a comensales!</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">Te brindamos toda la experiencia de nuestros meseros y meseras para antender a tus comensales y no tener que hacer nada.</p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <Link to=""><button type="button" className="btn btn-primary btn-lg px-4 gap-3">Más info</button></Link>
            <Link to="/contacto"><button type="button" className="btn btn-outline-secondary btn-lg px-4">Contratar</button></Link>
          </div>
        </div>
      </div>
      {/* Call to action o hero para desktops */}
      <div className="container col-xxl-8 px-4 py-2 d-none d-lg-block">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img src={servicioscta2} className="d-block mx-lg-auto img-fluid" alt="Pedí Online" width={700} height={500} loading="lazy" />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3">¡Servicio a comensales!</h1>
            <p className="lead">Te brindamos toda la experiencia de nuestros meseros y meseras para antender a tus comensales y no tener que hacer nada.</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <Link to=""><button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Más info</button></Link>
              <Link to="/contacto"><button type="button" className="btn btn-outline-secondary btn-lg px-4">Contratar</button></Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  </section>
</section>
  )
}

export default Servicios