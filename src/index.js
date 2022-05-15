import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { addNote, deleteNote, newNote, store } from './redux/store';


const root = ReactDOM.createRoot(document.getElementById('root'));

export let rerenderTree = () => {
  root.render(
    <React.StrictMode>
      <App store={store} addNote={addNote} newNote={newNote} deleteNote={deleteNote}/>
    </React.StrictMode>
  );
}
rerenderTree()


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
