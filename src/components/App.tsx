import React from 'react'

import { store } from "../state";
import { Provider } from "react-redux";
import RepositoriesList from './RepositoriesList';

const App = () => {
  return <Provider store={store}>
    <div>
      <h1>Search for a repositories</h1>
      <RepositoriesList />
    </div> 
  </Provider>
};

export default App;
