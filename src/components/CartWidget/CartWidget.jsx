import React from 'react';
import './CartWidget.css';
import {LinkContainer} from 'react-router-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import useCartContext from '../../store/CartContext';

function CartWidget(props) {
  const { itemsTotal } = useCartContext();
  if(itemsTotal() > 0){
  return (
<LinkContainer to="/cart" className="text-dark">
<div className="cart-icon">
      {/* Acá puede ir cualquier ícono que quieran. En mi caso, estoy usando FontAwesome para React JS. */}
      <FontAwesomeIcon icon={faCartShopping} size="2x" color="black" />
      <div className="mostrar-cantidad">{itemsTotal()}</div>
    </div>
</LinkContainer>
);
}
}
export default CartWidget;