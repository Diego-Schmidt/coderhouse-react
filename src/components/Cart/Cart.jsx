import React from 'react'

function Cart({ greeting }) {
  return (
    <section id="menu" className="py-5 text-center container">
    <div className="row py-lg-5">
        <div className="col-12">
        <p className="lead text-muted">{greeting}</p>
      </div>
    </div>
    <div className="album py-5 bg-warning">
    <div className="container">
      <div className="row row-cols-1 row-cols-sm-1 row-cols-md-3 row-cols-lg-3 g-3">
      
      </div></div></div>
  </section>
  )
}

export default Cart