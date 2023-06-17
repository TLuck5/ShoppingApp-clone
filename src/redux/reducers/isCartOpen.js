import { OPEN_CART,CLOSE_CART } from "../constants/actionTypes"

const initState = false

export const isCartOpen = (state = initState, action)=>{
    switch (action.type) {
        case OPEN_CART:
            return true

        case CLOSE_CART:
            return false

        default:
            return state;
    }
}