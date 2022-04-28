import React from 'react'
import Item from '../Item/Item.jsx';
import ItemCount from '../ItemCount/ItemCount.jsx';
import { Container } from 'react-bootstrap';



function ItemList({ items }) {
  return (
    <>
    { items.map(thisitem => {
      return (
  <Container key={thisitem.id}>
  <Item item={thisitem.id} name={thisitem.name} description={thisitem.description} ingredients={thisitem.ingredients} price={thisitem.price}/>
  <ItemCount stock={thisitem.stock} initial={1} itemName={thisitem.name} onAdd={thisitem.onAdd} />
  </Container>
      )
    })}
    </>
  )
}

export default ItemList