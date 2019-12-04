import thunk from "redux-thunk";
import {applyMiddleware,createStore} from "redux";
//reducer

import reducers from "./reducers/weatherReducer";


//middleware
const middleware=applyMiddleware(thunk);

//--store

const store=createStore(reducers,middleware);
export default store;