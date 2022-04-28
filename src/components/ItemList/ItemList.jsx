import React from 'react'
import Item from '../Item/Item.jsx';
import ItemCount from '../ItemCount/ItemCount.jsx';
import { Container } from 'react-bootstrap';



function ItemList({ items }) {
  return (
    <>
    { items.map(thisitem => {
      return (
  <Container>
  <Item item={thisitem.name} name={thisitem.name} key={thisitem.id} description={thisitem.description} ingredients={thisitem.ingredients} price={thisitem.price}/>
   {/* <ItemCount stock={thisitem.stock} key={thisitem.key} initial={1} itemName={thisitem.name} onAdd={thisitem.onAdd} />  */}
  </Container>
      )
    })}
    </>
  )
}

export default ItemList