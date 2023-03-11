
const cartReducer = (state, action) => {
    if(action.type === "ADD_TO_CART") {
        let {id, color, amount, product} = action.payload;

        let existingProduct = state.cart.find((currElem) => {
            return currElem.id === id + color;
        });
        
        if(existingProduct) {
            let updateProduct = state.cart.map((currElem) => {
                if(currElem.id === id + color) {
                    let newAmount = currElem.amount + amount;
                    // To show max items in stock
                    if(newAmount >= currElem.max) {
                       newAmount = currElem.max;
                    }
                    return {
                        ...currElem,
                        amount: newAmount,
                    }
                } else {
                    return currElem;
                }
            });
            return {
                ...state,
                cart: updateProduct,
            }
        } else {
            let cartProduct;
            cartProduct = {
                id: id + color,
                color,
                amount,
                name: product.name,
                price: product.price,
                max: product.stock,
                image: product.image[0].url,
            }
            return {
                ...state,
                cart: [
                    ...state.cart,
                    cartProduct,
                ]
            }
            // console.log(product);
        }
    }

    if(action.type === "REMOVE_ITEM") {
        let updateItem = state.cart.filter((currElem) => {
            return currElem.id !== action.payload
        })
        return {
            ...state,
            cart: updateItem,
        }
    }

    if(action.type === "CLEAR_CART") {
        return {
            ...state,
            cart: []
        }
    }

    if(action.type === "SET_DECREMENT") {
        let updateProduct = state.cart.map((currElem) => {
            if(currElem.id === action.payload) {
                let decrementAmt = currElem.amount - 1;
                if(decrementAmt < 1) {
                    decrementAmt = 1;
                }
                return {
                    ...currElem,
                    amount: decrementAmt,
                }
            } else {
                return currElem
            }
        })
        return {
            ...state,
            cart: updateProduct,
        }
    }

    if(action.type === "SET_INCREMENT") {
        let updateProduct = state.cart.map((currElem) => {
            if(currElem.id === action.payload) {
                let incrementAmt = currElem.amount + 1;
                if(incrementAmt >= currElem.max) {
                    incrementAmt = currElem.max;
                }
                return {
                    ...currElem,
                    amount: incrementAmt
                }
            } else {
                return currElem;
            }
        })
        return {
            ...state,
            cart: updateProduct
        }
    }

    return state;
}

export default cartReducer;