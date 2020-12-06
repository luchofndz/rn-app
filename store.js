import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {rootReducer} from './app/reducers/index';
import mySaga from './app/saga/userSagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(mySaga);

export {store};
