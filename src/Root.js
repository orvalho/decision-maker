import React from 'react';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import reduxPromise from 'redux-promise';

import reducers from './reducers';

export default props => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(reducers, composeEnhancers(applyMiddleware(reduxPromise)));
  return <Provider store={store}>{props.children}</Provider>;
}
