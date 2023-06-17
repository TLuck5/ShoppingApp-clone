import { ADD_TO_CART, REMOVE_FROM_CART } from "../constants/actionTypes";

const initState = []

export const cartReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const isProductPresentintheCart = state.find((item) => item.id === action.payload.id)
            return isProductPresentintheCart ?
                state.map((item) => item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item)
                : [...state, { ...action.payload, quantity: 1 }]

        case REMOVE_FROM_CART:
            const product = state.find((item) => item.id === action.payload.id)
            return product.quantity === 1 ?
                state.filter((item) => item.id !== action.payload.id)
                : state.map((item) => item.id === action.payload.id ? { ...item, quantity: item.quantity - 1 } : item)

        default:
            return state;
    }
}