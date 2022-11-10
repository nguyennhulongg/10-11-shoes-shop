import { Route, Routes } from 'react-router-dom';
import './App.css';
import ShowAllShoes from './components/showShoes/HomePage';
import ShowNews from './components/ShowNews';
import logo from '../src/image/logo.png' 
import AllProducts from './components/allProducts/AllProducts';

function App() {
  return (
    <div>
      <div className='nav-bar'>
        <ul className='nav-items'>
          <a className='link-to-home' href='/'>
            <img className='logo' src={logo}/>
          </a>
          <li className='nav-item'>
            <a href='/'>Home</a>
          </li>
          <li className='nav-item'>
            <a href='/all-products'>All Products</a>
          </li>
          <li className='nav-item'>
            <a href='/news'>News</a>
          </li>
        </ul>
      </div>

      <Routes>
        <Route path='/' element={<ShowAllShoes />}/>
        <Route path='/all-products' element={<AllProducts />}/>
        <Route path='/news' element={<ShowNews />}/>
      </Routes>
      
    </div>
  );
}

export default App;
