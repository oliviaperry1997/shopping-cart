import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product, quantity) => {
        const qty = Number(quantity) || 1;
        setCartItems((prevItems) => {
            const existingItem = prevItems.find(
                (item) => item.product.id === product.id
            );

            if (existingItem) {
                return prevItems.map((item) =>
                    item.product.id === product.id
                        ? { ...item, quantity: item.quantity + qty }
                        : item
                )
            } else {
                return [...prevItems, { product, quantity: qty }];
            }
        });
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart }}>
            {children}
        </CartContext.Provider>
    );
};
