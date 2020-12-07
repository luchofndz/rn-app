import * as React from "react";
import { store, persistor } from './store';
import { Provider } from 'react-redux';
import { App } from './app/index';
import { PersistGate } from 'redux-persist/integration/react'

const Root = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>	
        <App />
      </PersistGate>
    </Provider>
  );
};

export default Root;