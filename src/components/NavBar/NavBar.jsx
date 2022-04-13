import React from 'react';
import './NavBar.css';


function NavBar(props) {
    return (
        <nav>
        <div className="nav">
            <img className="navbar-brand" src="./logo.webp" width="150px" alt="logo" />
            <a className="linksNav" href="#"><li>Inicio</li></a>
            <a className="linksNav" href="#"><li>Menú</li></a>
            <a className="linksNav" href="#"><li>Servicios</li></a>
            <a className="linksNav" href="#"><li>Acerca</li></a>
            <a className="linksNav" href="#"><li>Contacto</li></a>
            <button className="btn btn-primary">Reservar</button>
        </div>
        </nav>
    );
}

export default NavBar;