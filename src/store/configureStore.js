import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import reduxThunk from "redux-thunk";
// import logger from "redux-logger";
import rootReducer from "../reducers";

// export default function configureStore(initialState) {
//   const enhancer = compose(applyMiddleware(reduxThunk));
//   const store = createStore(rootReducer, initialState, enhancer);
//   return store;
// }

const enhancer = compose(applyMiddleware(reduxThunk));
 const configureStore = createStore(rootReducer, {}, enhancer)
export default configureStore;