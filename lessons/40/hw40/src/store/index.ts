import { createStore, combineReducers, applyMiddleware } from "redux";
import {UserReducer} from 'store/UserReducer';
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'


const RootReducer = combineReducers({
    user: UserReducer, 
   
})

export type RootState = ReturnType <typeof RootReducer>;

export const store = createStore(RootReducer, composeWithDevTools(applyMiddleware(thunk)));