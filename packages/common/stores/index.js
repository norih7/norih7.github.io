import { createStore as reduxCreateStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import rootSaga from "@middlewares/Api";

const initialState = { count: 0 };
const reducer = (state = initialState, action) => {
    if (action.type === `INCREMENT`) {
        return Object.assign({}, state, {
            count: state.count + 1
        });
    }
    return state;
};

const sagaMiddleware = createSagaMiddleware();

const createStore = () => {
    const store = reduxCreateStore(reducer, applyMiddleware(sagaMiddleware));
    sagaMiddleware.run(rootSaga);
    return store;
};

export default createStore;
