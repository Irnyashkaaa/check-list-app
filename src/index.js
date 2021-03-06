import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './App';
import reportWebVitals from './reportWebVitals';
import  {store}  from './redux/store';


const root = ReactDOM.createRoot(document.getElementById('root'));

export let rerenderTree = () => {
  console.log(store);
  root.render(
    <React.StrictMode>
      <App state={store.getState()}
      dispatch={store.dispatch}/>
    </React.StrictMode>
  );
}
rerenderTree()


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
