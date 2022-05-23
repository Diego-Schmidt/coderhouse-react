import React from 'react'
import './Contacto.css';
import '../../assets/css/animaciones.css'

function Contacto() {
    document.title = 'Habemus Papa! Contacto';
  return (
    <section className="slide-in-fwd-center">
  {/* Formulario de contacto - no funcional basado en https://www.freecontactform.com/form-guides/html-email-form*/}
  <div className="container  mt-5 mb-5 ">
    <div className="row m-0">
      <div className="col-md-3 bg-custom p-0 d-flex text-center  mx-auto justify-content-center flex-column">
        <h3 className="mb-2 text-white">Info</h3>
        <div className="info text-light .fs-6">
          234,AR BS
          <p>info@habemuspapa.com</p>
          2932675489
          <div className="social-icons">
          </div>
        </div>
      </div>
      <div className="col-md-8 p-0 bg-custom2 pt-4 pb-4">
        {/* <h3 className="pl-4" /> */}
        <form className="w-100 p-4" action="#">
          <div className="row">
            <div className="col-md-6">
              <div className="mb-3">
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Nombre" required />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <input type="email" className="form-control" id="exampleFormControlInput2" placeholder="Email" required />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="mb-3">
                <textarea className="form-control" id="exampleFormControlInput2" placeholder="Mensaje" required rows={3} defaultValue={""} />
              </div>
            </div>
          </div>
          <button type="button" className="btn btn-custom btn-lg btn-block mt-3">Enviar</button>
        </form>
      </div>
      <div className="col-md-1 bg-white d-none">
        <div className="social-icons">
          <i className="fa fa-facebook" />
          <i className="fa fa-twitter" />
          <i className="fa fa-pinterest" />
          <i className="fa fa-linkedin" />
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Contacto