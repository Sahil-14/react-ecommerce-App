import { createStore,applyMiddleware} from 'redux';
// middleware is between acrions and root reducers
// for local and session storage
import {persistStore} from 'redux-persist';

import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middleware = [];

if(process.env.NODE_ENV === 'development'){
    middleware.push(logger);
}

// use logger middleware only in development mode 
//process.env.NODE_ENV can be production,development,test
export const store = createStore(rootReducer,applyMiddleware(...middleware));

// it calls persist store passing  in our store
export const persistor =persistStore(store);
// this is new persisted version of store
export default {store,persistor};




// while using persister you also have to edit root reducer

