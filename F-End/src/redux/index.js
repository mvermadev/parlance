import { createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

// Redux persist packages
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./reducers";

const persistConfig = {
    key: "root",
    storage,
    whitelist: []   // Those store constants which we want to persist
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let middleware = [thunk];

// Allow redux logger only in dev mode
if (process.env.NODE_ENV !== "production") {
    middleware.push(logger);
}

const store = createStore(
    persistedReducer,
    composeEnhancer(applyMiddleware(...middleware))
);
const persistor = persistStore(store);

export { store, persistor };
