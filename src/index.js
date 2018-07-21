import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';

import AppContainer from './containers/AppContainer';
import mainReducer from './reducers/index';

const persistConfig = {
  key: 'myForm',
  storage,
}

const persistedReducer = persistReducer(persistConfig, mainReducer)

const store = createStore(
  persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistStore(store)}>
      <AppContainer />
   </PersistGate>
  </Provider>,
  document.getElementById('root')
)
