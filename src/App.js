import React, { Suspense, lazy } from 'react';
import './App.css';
import {
  BrowserRouter,
  Route,
  Routes
}
  from 'react-router-dom';
import Navbar from './components/Navbar1';

/* import Home from './components/Home1';
import Contact from './components/Contact1';
import About from './components/About1'; */


const Home = lazy(() => import('./components/Home1'));
const Contact = lazy(() => import('./components/Contact1'));
const About = lazy(() => import('./components/About1'));

const A = lazy(() => import('./context/AuthCxt').then(module => ({ default: module.AuthContext })));
export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />

        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

































/* import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';
import AuthenticationFunction from './context/AuthCxt';
import Proute1 from './Routes/Proute1';
import Home1 from './components/Home1';
import Dashboard from './components/Dashboard';
import Login from './components/Login';

function App() {

  return (
    <>
      <AuthenticationFunction>
        <BrowserRouter>
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route element={<Proute1 />}>
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>
            <Route path='/' element={<Home1 />} />
          </Routes>
        </BrowserRouter>
      </AuthenticationFunction>
    </>
  )
}

export default App; */
/* import Home from './components/Home';
import NoPage from './components/PageNotFoundError';
import Blog from './components/Blog';
import BlogPost from './components/BlogPost';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar'; */
// const [name, setName] = useState('');
{/* <BrowserRouter>
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
    </BrowserRouter> */}