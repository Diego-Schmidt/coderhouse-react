import React from 'react';
import './NavBar.css';



function NavBar(props) {
    return (
<nav> 
<div className="container-fluid headlogbg">
<img className="navbar-brand" src={`${process.env.PUBLIC_URL}/assets/images/logo.webp`} width="150px" alt="logo" />
</div>
      <div className="navbar nav-stacked navbar-expand-md navbar-expand-sm navbar-light bg-light">
         <div className="container-fluid cabeza mx-auto">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
               <div className="navbar-nav mx-auto">
                  <a className="nav-link active" aria-current="page" href="#">
                     <h4>Inicio</h4>
                  </a>
                  <a className="nav-link" href="#">
                     <h4>Menú</h4>
                  </a>
                  <a className="nav-link" href="#">
                     <h4>Servicios</h4>
                  </a>
                  <a className="nav-link" href="#">
                     <h4>Acerca</h4>
                  </a>
                  <a className="nav-link" href="#">
                     <h4>Contacto</h4>
                  </a>
               </div>
            </div>
            <a href="#"><img id="carrito" src={`${process.env.PUBLIC_URL}/assets/images/carrito.svg`} alt="carritodecompras" heigth="" /></a>
         </div>
         </div>
      </nav>
    );
}

export default NavBar;