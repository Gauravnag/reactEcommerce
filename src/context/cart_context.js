import { useReducer } from "react";
import { useEffect } from "react";
import { createContext, useContext } from "react";
import reducer from "../reducer/cartReducer";

const CartContext = createContext();

const getLocalCartData = () => {
    let localCartData = localStorage.getItem("nagData");
    if(localCartData === []) {
        return [];
    } else {
        return JSON.parse(localCartData);
    }
}

const initialValue = {
    // cart: [],
    cart: getLocalCartData(),
    total_items: "",
    total_amount: "",
    shipping_fee: 50000,
}

const CartProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialValue);

    // AddTo Cart btn on Product Page
    const addToCart = (id, color, amount, product) => {
        dispatch({ type: "ADD_TO_CART", payload: {id, color, amount, product} })
    }

    // Delete Icon in Add To Cart page i.e to remove the individual item from cart
    const removeItem = (id) => {
        dispatch({ type: "REMOVE_ITEM", payload: id })
    }

    // Clear Cart
    const clearCart = () => {
        dispatch({ type: "CLEAR_CART" })
    }

    // Increment & Decrement in Product page
    const increment = (id) => {
        dispatch({ type: "SET_INCREMENT", payload: id })
    }
    const decrement = (id) => {
        dispatch({ type: "SET_DECREMENT", payload: id })
    }

    // Set the Data in Product page
    useEffect(() => {
        localStorage.setItem("nagData", JSON.stringify(state.cart));
    }, [state.cart])

    return <CartContext.Provider value={{...state, addToCart, removeItem, clearCart, increment, decrement }}>
        {children}
    </CartContext.Provider>
}

const useCartContext = () => {
    return useContext(CartContext);
}

export {useCartContext, CartProvider}