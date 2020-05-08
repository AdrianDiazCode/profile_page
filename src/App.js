import React from 'react';
import { Provider } from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import rootReducer from './redux/reducers'
// import logo from './logo.svg';
import './App.css';
// import ProfileHeader from './components/profile_header/profile_header';
import store from './redux/store';
import ProfileBody from './components/profile_body/profile_body';
function App() {
  console.log(store.getState());
  
  return (
    <Provider store={store}>
      <div className="App">
        {/* <ProfileHeader/> */}
        <ProfileBody />

      </div>
    </Provider>
  );
}

export default App;
