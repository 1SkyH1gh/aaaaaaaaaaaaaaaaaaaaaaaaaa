import React from 'react';
import {Main} from "./Main";
import { createStore } from 'redux'
import {pushReducers} from "./Redux";

const App: React.FC = () => {
  let store=createStore(pushReducers)
  return (
   <Main/>
  );
}

export default App;
