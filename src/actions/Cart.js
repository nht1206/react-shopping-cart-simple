import { ADD_TO_CART, REMOVE_ITEM, SUB_QUANTITY, ADD_QUANTITY, ADD_SHIPPING, SUB_SHIPPING } from "./actions-types/Cart"

export const addToCartSuccess = (id) => {
    return {
        type: ADD_TO_CART,
        payload: id
    }
}

export const addToCart = (id) => {
    return (dispatch) => {
        console.log(id);
        dispatch(addToCartSuccess(id));
    }
}

export const removeItemSuccess = (id) => {
    return {
        type: REMOVE_ITEM,
        payload: id
    }
}

export const removeItem = (id) => {
    return (dispatch) => {
        console.log(id);
        dispatch(removeItemSuccess(id))
    }
}

export const subtractQuantitySuccess = (id) => {
    return {
        type: SUB_QUANTITY,
        payload: id
    }
}

export const subtractQuantity = (id) => {
    return (dispatch) => {
        console.log(id);
        dispatch(subtractQuantitySuccess(id));
    }
}

export const addQuantitySuccess = (id) => {
    return {
        type: ADD_QUANTITY,
        payload: id
    }
}

export const addQuantity = (id) => {
    return (dispatch) => {
        console.log(id);
        dispatch(addQuantitySuccess(id));
    }
}

export const addShippingSuccess = (shippingFee) => {
    return {
        type: ADD_SHIPPING,
        payload: shippingFee
    }
}

export const addShipping = (shippingFee) => {
    return (dispatch) => {
        console.log(shippingFee);
        dispatch(addShippingSuccess(shippingFee));
    }
}

export const subShippingSuccess = (shippingFee) => {
    return {
        type: SUB_SHIPPING,
        payload: shippingFee
    }
}

export const subShipping = (shippingFee) => {
    return (dispatch) => {
        console.log(shippingFee);
        dispatch(subShippingSuccess(shippingFee));
    }
}