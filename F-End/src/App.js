import React from 'react';
import './App.css';
import { store, persistor } from "../src/redux/index";
import Collector from './components/Collector';
import {Provider} from "react-redux";
import { PersistGate } from "redux-persist/integration/react";


function App() {
  return (
      <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
          <Collector/>
          </PersistGate>
      </Provider>
  );
}

export default App;
