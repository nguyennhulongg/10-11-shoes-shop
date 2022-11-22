import axios from 'axios'
import React, { useEffect, useState } from 'react'
import BestSellers from '../bestSellerProduct/BestSellers'
import ScrollToTop from '../Common/ScrollToTop'
import Footer from '../footer/Footer'
import SaleProducts from '../forSaleProducts/SaleProducts'
import Header from '../header/Header'
import HomepageLayout from '../HompageLayout'
import './homePage.css'

const HomePage = () => {

  const [products, setProducts] = useState([])

  const getProducts = async () => {
    try {
      const res = await axios.get('https://636b4fca7f47ef51e12cb634.mockapi.io/api/v1/shoesShop');
      setProducts(res.data)
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <div>
      <div className='home-container'>
        <Header />
        <div className='homepage-content'>
          <BestSellers bestSellerProducts = {products}/>
          <SaleProducts saleProducts = {products}/>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default HomePage
