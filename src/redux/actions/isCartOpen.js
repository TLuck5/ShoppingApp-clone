import { CLOSE_CART, OPEN_CART } from "../constants/actionTypes"


export const openCart = ()=>{
    return{
        type:OPEN_CART
    }
}

export const closeCart = ()=>{
    return{
        type:CLOSE_CART
    }
}