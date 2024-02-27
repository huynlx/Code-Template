import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootReducer from 'src/store/reducers';
import rootSaga from 'src/store/sagas';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

const configureStore = () => {
  sagaMiddleware.run(rootSaga);
  return store;
};

export default configureStore;
