import { createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "./_reducers/rootReducer";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
const persistConfig = {
    key: "root",
    storage,
    blacklist: []//['reviewRoundReducer', 'feedbackTaskReducer', 'learningActionReducer']
    //whitelist: ['submissionReducer', 'assignmentReducer', 'rubricReducer', 'reviewRoundReducer']
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const middlewares = [thunk];
// if (__DEV__) react native check dev
middlewares.push(logger);

const store = createStore(
    persistedReducer,
    {},
    compose(
        applyMiddleware(...middlewares),
        window.devToolsExtension ? window.devToolsExtension() : f => f)
);
const persistor = persistStore(store);

export { store, persistor };
