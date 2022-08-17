import {combineReducers} from "redux";
import {itemReducer} from "./item/itemRuducer";

const rootReducer = combineReducers({
    itemRed : itemReducer
})
export {rootReducer}