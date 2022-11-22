import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './bestSeller.css'

const BestSellers = (props) => {
  const {bestSellerProducts} = props

  return (
    <div>
      <div className='best-seller-container'>
        <h1 className='section-tilte'>EXPLORE BEST SELLERS</h1>
        <div className='best-seller-products products-container'>
          { bestSellerProducts.map((product) => {
            if (product.bestSeller === true) {
              return (
                <div key={product.id} className='best-seller-product'>
                  <img className='best-seller-product-img product-img' src={product.shoesImage} alt='giay'/>
                  <div className='product-information'>
                    <p className='best-seller-product-name'>{product.shoesName}</p>
                    <p className='best-seller-product-price'>${product.salePrice}</p>
                  </div>
                </div>
              )
            } 
          }) }
        </div>
      </div>
    </div>
  )
}

export default BestSellers