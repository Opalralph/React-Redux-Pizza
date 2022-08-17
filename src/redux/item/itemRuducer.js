import {BUY_ITEM} from "./item.reducerType";

const initialState = {
    count : 35
}

export const itemReducer = (state=initialState , action) => {
    switch (action.type) {
        case BUY_ITEM:
            return {
                count : state.count - 1 > 0 ? state.count - 1 : 0
            }
        default :
            return state
    }
}