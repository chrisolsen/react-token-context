import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import useAuthToken from './useAuthToken';

import AuthTokenContext from './Auth.context'
import MyComponent from './MyComponent';

function App() {

  const authToken = useAuthToken()

  useEffect(() => {
    console.log('in the app')
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      {authToken &&
      <AuthTokenContext.Provider value={authToken}>
        <MyComponent></MyComponent>
      </AuthTokenContext.Provider>
      }
    </div>
  );
}

export default App;
