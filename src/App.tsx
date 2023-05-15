// libraries
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Provider} from 'react-redux'

// styles
import './App.css';

// pages
import { Navbar } from './Navbar';
import { Home } from './Pages/Home'
import { Login } from './Pages/Login'
import { Contact } from './Pages/Contact'
import { store } from './store';

// provider merupakan component dari react redux untuk mendeklarasikan sebuah global state yang dapat diakses oleh
// semua component

function App() {
  return (
    <div className="App">
      <Provider store={store}>

        <Router>
          <div className='navigation'>
            <Navbar/>
          </div>

          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/contact' element={<Contact/>} />
          </Routes>
        </Router>

      </Provider>
    </div>
  );
}

export default App;
