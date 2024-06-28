import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';
import Home from './components/Home';
import NoPage from './components/PageNotFoundError';
import Blog from './components/Blog';
import BlogPost from './components/BlogPost';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
function App() {
  const [name, setName] = useState('');

  return (
    <>
      <BrowserRouter>
        <Navbar name={name} />
        <Routes>
          <Route path='/' element={<Home setName={setName} />} />
          <Route path='/blogs' element={<Blog setName={setName} />}>
            <Route path=':id' element={<BlogPost />} />
          </Route>
          <Route path='/about' element={<About setName={setName} />} />
          <Route path='/contact' element={<Contact setName={setName} />} />
          <Route path='*' element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;