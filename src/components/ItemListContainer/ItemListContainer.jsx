import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Container } from 'react-bootstrap';

function ItemListContainer(props) {
    return (
<Container>
<h1>{props.greeting}</h1>
<div><ItemCount stock={10} initial={1} /></div>
</Container>
        );
    }
    
    export default ItemListContainer;