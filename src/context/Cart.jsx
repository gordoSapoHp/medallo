import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();


export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    // Obtener el estado del carrito almacenado en localStorage, o un array vacío si no hay datos guardados
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  });
  const addToCart = (ticket) => {
    /* setCart([...cart, ticket]); */
    const ticketInCartIndex = cart.findIndex(item => item.id === ticket.id);

    if (ticketInCartIndex >= 0) {
        const newCart = structuredClone(cart)
        newCart[ticketInCartIndex].quantity += 1
        return setCart(newCart)
    }

    setCart(prevState =>[
        ...prevState,
        {
            ...ticket,
            quantity: 1
        }
    ])
  };

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);


  const removeFromCart = ticket => {
    setCart(prevState => prevState.filter(item => item.id !== ticket.id))
  }

  const clearCart = () => {
    setCart([]);
  };

  const [delivery, setDelivery] = useState(9000);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        delivery,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

