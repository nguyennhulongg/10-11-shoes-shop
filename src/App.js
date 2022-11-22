import { Route, Routes } from 'react-router-dom';
import './App.css';
import AllProducts from './components/allProducts/AllProducts';
import HomePage from './components/home/HomePage';
import logo from '../src/image/logo.png'
import ScrollToTop from './components/Common/ScrollToTop';


function App() {
  return (
    <div>
      <div className='nav-bar-container'>
        <ul className='nav-items'>
          <a href='/'><img className='page-logo' src={logo} alt='logo'/></a>
          <a href='/' className='nav-item'>Home</a>
          <a href='all-products' className='nav-item'>All Products</a>
        </ul>
      </div>

      <ScrollToTop />

      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='all-products' element={<AllProducts />}/>
      </Routes>

    </div>
  );
}

export default App;
