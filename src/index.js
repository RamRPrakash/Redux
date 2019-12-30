import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import App from './App'
import { createStore  } from "redux";
import allReducer from './reducers'
import {Provider} from 'react-redux'

const store = createStore(allReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


// // STORE


// // ACTION 
// const increment =()=>{
//   return {
//     type : 'INCREMENT'
//   }
// }
// const decrement =()=>{
//   return {
//     type : 'DECREMENT'
//   }
// }

// // REDUCER
// const counter = (state = 0 , action)=>{
//   switch(action.type){
//     case 'INCREMENT':
//       return state + 1 ;
//     case 'DECREMENT':
//       return state -1 ; 
//   }
// }

// let store = createStore(counter)

// store.subscribe(()=>console.log(store.getState()))

// store.dispatch(increment())


const rootElement = document.getElementById("root");
ReactDOM.render(
<Provider store={store}>
<App /></Provider>, rootElement);
