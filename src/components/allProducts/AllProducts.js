import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Footer from '../footer/Footer';
import Header from '../header/Header';
import './allProducts.css'

const AllProducts = () => {

  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const res = await axios.get('https://636b4fca7f47ef51e12cb634.mockapi.io/api/v1/shoesShop')
      setProducts(res.data)
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <div>
      <Header />
      <h2 className='all-products-title'>EXPLORE ALL OUR PRODUCTS</h2>
      <div className='all-products-container products-container'>
        { products.map((product) => {
          return (
            <div key={product.id} className='product-card'>
              <img className='shoes-image product-img' src={product.shoesImage} alt='product'/>
              <div className='product-information'>
                <p>{product.shoesName}</p>
                <div className='product-price-container'>
                  <p className='product-price'><del>${product.price}</del></p>
                  <p className='product-sale-price'>${product.salePrice}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <Footer />
    </div>
  )
}

export default AllProducts