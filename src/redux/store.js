import { combineReducers, createStore, applyMiddleware } from 'redux';
import usersReducer from './usersReducer';
import createSagaMiddleware from 'redux-saga';
import mainSaga from './sagas';

const sagaMiddleware = createSagaMiddleware()
const reducers = combineReducers({
    users: usersReducer
});

const store = createStore(reducers, applyMiddleware(sagaMiddleware));


sagaMiddleware.run(mainSaga);

export default store;
