import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import habemuscomiendo from '../../assets/images/habemuscomiendo.webp';
import combo1 from '../../assets/images/combo1.webp';
import combo2 from '../../assets/images/combo2.webp';
import combo3 from '../../assets/images/combo3.webp';
import './Inicio.css'
import '../../assets/css/animaciones.css'
import LoadingSpinner from '../../components/LoadingSpinner/';


function Inicio() {
  
  document.title = 'Habemus Papa! Inicio';


  if(combo3 === undefined){
    return <section id="menu" className="py-5 text-center container">
    <div className="album bg-degrade py-5">
    <div className="container">
      <div className="">
      <LoadingSpinner />
      </div></div></div>
  </section>
  }
  return (
<div>
  <section className="heroportada position-relative pt-48 pb-40 bg-dark bg-cover bg-size--cover slide-in-fwd-center">
    {/* Overlay */}
    <span className="position-absolute top-0 start-0 w-full h-full bg-dark opacity-80" />
    {/* Contenido */}
    <div className="container-lg max-w-screen-xl position-relative overlap-10 text-center text-lg-start pt-5 pb-5 pt-lg-6">
      <div className="row row-grid align-items-center">
        <div className="col-lg-8 text-center text-lg-start">
          {/* Título */}
          <h1 className="ls-tight font-bolder display-5 text-white mb-5">
            ¡Somos especialistas en fritas de todas partes del mundo!
          </h1>
          {/* Texto */}
          <p className="lead text-white text-opacity-80 mb-10 w-lg-2/3">
            Tenemos las mejores materias primas y expertos cocineros para crear platos únicos que deleitarán los más exigentes paladares.
            {/* Botones */}
          </p><div className="mt-10 mx-n2">
            <Link to="/" className="btn btn-lg btn-primary shadow-sm mx-2 px-lg-8">
              ¡Pedir Online!
            </Link>
            <Link to="" className="btn btn-lg btn-primary bg-success py-2 mx-2 px-lg-8">
              Promociones
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section>
    <article>
      <div className="px-4 py-2 my-5 text-center d-lg-none d-xl-none">
        <img className="d-block mx-auto img-fluid mb-4" src={habemuscomiendo} alt="habemusdog" />
        <h1 className="display-5 fw-bold">¡Pedí Ya!</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">Hacé tu pedido antes que Habemus se coma las papas, con tu pedido te regalamos una foto de nuestra mascota y un vaso grande de Manaos.</p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <Link to=""><button type="button" className="btn btn-primary btn-lg px-4 gap-3">Menú</button></Link>
            <Link to=""><button type="button" className="btn btn-outline-secondary btn-lg px-4">Promos</button></Link>
          </div>
        </div>
      </div>
      {/* Call to action o hero para desktops */}
      <div className="container col-xxl-8 px-4 py-2 d-none d-lg-block">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img src={habemuscomiendo} className="d-block mx-lg-auto img-fluid" alt="Pedí Online" width={700} height={500} loading="lazy" />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3">¡Pedi Ya!</h1>
            <p className="lead">Hacé tu pedido antes que Habemus se coma las papas, con tu pedido te regalamos una foto de nuestra mascota y un vaso grande de Manaos.</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <Link to=""><button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Menú</button></Link>
              <button type="button" className="btn btn-outline-secondary btn-lg px-4">Promos</button>
            </div>
          </div>
        </div>
      </div>
    </article>
    <div className="pricing-header p-3 py-2 pb-md-4 mx-auto text-center">
      <h1 className="display-4 fw-normal">¡Combos!</h1>
      <p className="fs-5">Aprovechá nuestra promo de combos y llevate las mejores fritas y las mejores burgers con una ensalada gratis.</p>
    </div>
    <div className="px-5 py-2 text-center">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <div className="col">
          <div className="card mb-4 rounded-3 shadow-sm">
            <div className="card-header text-white bg-success py-3">
              <h4 className="my-0 fw-normal">Francesas con americana</h4>
            </div>
            <div className="card-body bg-warning">
              <img src={combo1} alt="comboamericanaconfritas" width="90%" className="img-fluid" />
              <h1 className="card-title pricing-card-title mt-3 text-white">$360</h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>Fritas francesas</li>
                <li>Burger americana</li>
                <li>Queso Cheddar</li>
                <li>Ensalada de lechuga y tomate</li>
              </ul>
              <button type="button" className="w-100 btn btn-lg btn-primary">¡Pedir online!</button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card mb-4 rounded-3 shadow-sm">
            <div className="card-header py-3 bg-success text-white">
              <h4 className="my-0 fw-normal">Batatas y doble americana</h4>
            </div>
            <div className="card-body bg-warning">
              <img src={combo2} width="90%" alt="comboamericanaconfritas" className="img-fluid" />
              <h1 className="card-title pricing-card-title mt-3 text-white">$400</h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>Batatas fritas</li>
                <li>Burger doble americana</li>
                <li>Cheddar</li>
                <li>Ensalada de palta, lechuga y zanahoria</li>
              </ul>
              <button type="button" className="w-100 btn btn-lg btn-primary">¡Pedir Online!</button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card mb-4 rounded-3 shadow-sm border-primary">
            <div className="card-header py-3 text-white bg-primary bg-success border-primary">
              <h4 className="my-0 fw-normal">¡Hawaianas Remolacha!</h4>
            </div>
            <div className="card-body bg-warning">
              <img src={combo3} width="90%" alt="comboamericanaconfritas" className="img-fluid" />
              <h1 className="card-title pricing-card-title mt-3 text-white">$500</h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>¡Fritas hawaianas!</li>
                <li>Burger con palta y pan de remolacha</li>
                <li>Queso azúl</li>
                <li>Ensalada de palmitos y lechuga</li>
              </ul>
              <button type="button" className="w-100 btn btn-lg btn-primary">¡Pedir Online!</button>
            </div>
          </div>
        </div></div></div></section>        
  
</div>
  )
}

export default Inicio; 