import { createContext } from "react";
import { useContext, useState } from 'react';

const CartContext = createContext();
const { Provider } = CartContext;
const useCartContext = () => useContext(CartContext);

export function CartContextProvider( {children} ) {
    const [cart, setCart] = useState([]);
    const addToCart = ( item, cant ) => {
        if (isInCart(item.id)){
           const newCart = cart.map(cartItem => {
                if (cartItem.id === item.id){
                const copyItem = {...cartItem};
                copyItem.cant += cant;
                return copyItem;
                }
                else 
                return cartItem;
                
            })
                setCart(newCart);
    } 
    else{
        const newItem = {...item, cant};
        setCart([...cart, newItem]);
    }
}

// Revisamos si el item está en el cart

const isInCart = (id) => {
    return cart.some((item) => item.id === id);
  };
  
// Obtenemos un item específico del cart

  const getItemFromCart = (id) => {
    return cart.find((item) => item.id === id);
  };

// Leemos la cantidad de unidades del item específico

const cantItems = (id) => {   
    const total = 0;
    cart.forEach(item => total + item.cant);
    return total;
    };

    function precioTotal() {
        let total = 0;
        cart.map ( (i) => total += i.price * i.cant );
        return total;
      }
    
    function itemsTotal() {
        let cantidad = 0;
        cart.map(i => cantidad += i.cant);
        return cantidad;
      }

    

  const ItemCartCant = (id) => {
    let prodInCart = cart.find((item) => item.id === id);
    return prodInCart.cant;
  };

// Removemos un item del cart

    const removeFromCart = (id) => {
    const newCart = [...cart];
    const cartFilter = newCart.filter(item =>{
        return item.id !== id;
    });
    setCart(cartFilter);
    }
    
 // Vaciamos el cart   
    const clearCart = () => {
        setCart([]);
    }

    const contextFunction = () => console.log("Contexto listo");
return (
    <Provider value={ { contextFunction, cart, addToCart, removeFromCart, clearCart, isInCart, getItemFromCart, ItemCartCant, cantItems, precioTotal, itemsTotal } }>
    {children}
    </Provider>
    
)

}

export default useCartContext;