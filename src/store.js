import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import sagaMiddleware from 'middlewares/sagas';
import pongGame from './reducers';

export default (() => {
    const composeEnhancers = process.env.NODE_ENV === 'production'
        ? compose
        : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const saga = createSagaMiddleware();

    const store = createStore(
        pongGame,
        undefined,
        composeEnhancers(
            applyMiddleware(...[
                    saga
            ])
        )
    );

    saga.run(sagaMiddleware);

    return store;
})();