import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from 'redux-saga'

import pin from './pin/reducer'
import light from './light/reducer';

const reducers = combineReducers({
    pin,
    light,
})


const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, {}, composeEnhancers(applyMiddleware(...middleware)))

sagaMiddleware.run(watcherSaga);

export default store