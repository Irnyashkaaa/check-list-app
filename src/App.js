
import './App.css';
import Header from './components/Header/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {HomePage} from './components/HomePage/HomePage'



export const App = (props) => {

  return (
    <BrowserRouter>
      <div className='container'>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage 
          state={props.state} 
          dispatch={props.dispatch}/>} />
        </Routes>
      </div>

    </BrowserRouter>
  );
}

