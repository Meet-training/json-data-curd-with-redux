import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import reduxThunk from "redux-thunk";
import logger from "redux-logger";

const middlewares = [reduxThunk];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middlewares),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
