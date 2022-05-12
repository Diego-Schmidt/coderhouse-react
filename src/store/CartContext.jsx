import { createContext } from "react";
import { useContext, useState } from 'react';

const CartContext = createContext();
const { Provider } = CartContext;
const useCartContext = () => useContext(CartContext);

export function CartContextProvider( {children} ) {
    const [cart, setCart] = useState([]);
    const addToCart = ( item, cant ) => {
        if (isInCart()){
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

    const removeFromCart = (id) => {
    const newCart = [...cart];
    const cartFilter = newCart.filter(item =>{
        return item.id !== id;
    });
    setCart(cartFilter);
    }
    
    const isInCart = (id) => {
    const cartList = [...cart];
    // cartList.some(id);
    return cartList.some(item => item.id === id);
    }
    
    //    const cantInCart = (id) => {
//        return false;
//    }// Vacía el carrito

    const clearCart = () => {
        setCart([]);
    }

    const contextFunction = () => console.log("Contexto listo");
return (
    <Provider value={ { contextFunction, cart, addToCart, removeFromCart, clearCart, isInCart } }>
    {children}
    </Provider>
)

}

export default useCartContext;