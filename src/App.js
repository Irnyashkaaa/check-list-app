
import './App.css';
import Header from './components/Header/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage'



const App = (props) => {
  return (
    <BrowserRouter>
      <div className='container'>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage store={props.store} addNote={props.addNote} newNote={props.newNote} deleteNote={props.deleteNote}/>} />
        </Routes>
      </div>

    </BrowserRouter>
  );
}

export default App;
