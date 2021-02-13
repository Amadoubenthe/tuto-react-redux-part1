const { ADD_TO_CART, REMOVE_FROM_CART } = require("../constants");

export function addToCart(data) {
    console.warn("data", data);
    return {
        type: ADD_TO_CART,
        data: data
    }
}

export function removeFromCart(data) {
    console.warn("data", data);
    return {
        type: REMOVE_FROM_CART,
        data: data
    }
}