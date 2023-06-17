import { SET_PRODUCTS } from "../constants/actionTypes";

const initState = []

export const productReducer = (state = initState,action)=>{
    switch (action.type) {
        case SET_PRODUCTS:
          return [...action.payload]
    
        default:
            return state;
    }
}