import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function home() {
  return (
<main>
  <section className="heroportada position-relative pt-48 pb-40 bg-dark bg-cover bg-size--cover">
    {/* Overlay */}
    <span className="position-absolute top-0 start-0 w-full h-full bg-dark opacity-80" />
    {/* Content */}
    <div className="container-lg max-w-screen-xl position-relative overlap-10 text-center text-lg-start pt-5 pb-5 pt-lg-6">
      <div className="row row-grid align-items-center">
        <div className="col-lg-8 text-center text-lg-start">
          {/* Title */}
          <h1 className="ls-tight font-bolder display-5 text-white mb-5">
            ¡Somos especialistas en fritas de todas partes del mundo!
          </h1>
          {/* Text */}
          <p className="lead text-white text-opacity-80 mb-10 w-lg-2/3">
            Tenemos las mejores materias primas y expertos cocineros para crear platos únicos que deleitarán los más exigentes paladares.
            {/* Buttons */}
          </p><div className="mt-10 mx-n2">
            <a href="#" className="btn btn-lg btn-primary shadow-sm mx-2 px-lg-8">
              ¡Pedir Online!
            </a>
            <a href="#" className="btn btn-lg btn-primary bg-success py-2 mx-2 px-lg-8">
              Promociones
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section>
    <article>
      <div className="px-4 py-2 my-5 text-center d-lg-none d-xl-none">
        <img className="d-block mx-auto img-fluid mb-4" src="./assets/habemuscomiendo.webp" alt />
        <h1 className="display-5 fw-bold">¡Pedí Ya!</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">Hacé tu pedido antes que Habemus se coma las papas, con tu pedido te regalamos una foto de nuestra mascota y un vaso grande de Manaos.</p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <a href="./pages/menu.html"><button type="button" className="btn btn-primary btn-lg px-4 gap-3">Menú</button></a>
            <a href="#"><button type="button" className="btn btn-outline-secondary btn-lg px-4">Promos</button></a>
          </div>
        </div>
      </div>
      {/* Call to action o hero para desktops */}
      <div className="container col-xxl-8 px-4 py-2 d-none d-lg-block">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img src="./assets/habemuscomiendo.webp" className="d-block mx-lg-auto img-fluid" alt="Pedí Online" width={700} height={500} loading="lazy" />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3">¡Pedi Ya!</h1>
            <p className="lead">Hacé tu pedido antes que Habemus se coma las papas, con tu pedido te regalamos una foto de nuestra mascota y un vaso grande de Manaos.</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <a href="./pages/menu.html"><button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Menú</button></a>
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
            <div className="card-body">
              <img src="./assets/combo1.webp" alt="comboamericanaconfritas" width="90%" className="img-fluid" />
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
            <div className="card-body">
              <img src="./assets/combo2.webp" width="90%" alt="comboamericanaconfritas" className="img-fluid" />
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
            <div className="card-body">
              <img src="./assets/combo3.webp" width="90%" alt="comboamericanaconfritas" className="img-fluid" />
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
          {/* fondo animado */}
          <div className="back1">
            <div className="back1 back2">
              <div className="back1 back3">
              </div>
            </div>
          </div>
        </div></div></div></section>        
  <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d788.8189508716905!2d-62.07188552609235!3d-38.87159314778961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sar!4v1637021307606!5m2!1sen!2sar" width="100%" height={120} style={{"border":"0"}} allowFullScreen loading="lazy" />
</main>
  )
}

export default home; 