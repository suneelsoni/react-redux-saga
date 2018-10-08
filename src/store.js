import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducers from './reducers'
import sagas from './sagas'

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // options like actionSanitizer, stateSanitizer
    }) : compose;
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware),
    // other store enhancers if any
);
const store = createStore(reducers, enhancer);

sagaMiddleware.run(sagas);

export default store;