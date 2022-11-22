import React from 'react'
import './saleProducts.css'

const SaleProducts = (props) => {
  const {saleProducts} = props

  return (
    <div>
      <h1 className='section-tilte'>SALE PRODUCTS</h1>
      <div className='sale-products-container products-container'>
        { saleProducts.map((product) => {
          return (
              <div key={product.id}>
                <div className='sale-product'>
                  <img className='sale-product-img product-img' src={product.shoesImage} alt='giay'/>
                  <div className='product-information'>
                  <p className='sale-product-name'>{product.shoesName}</p>
                  <div className='sale-price-content'>
                    <p className='price'>$<del>{product.price}</del></p>
                    <p className='sale-product-price'>${product.salePrice}</p>
                  </div>
                </div>
              </div>
            </div>
          )
        }) }
      </div>
    </div>
  )
}

export default SaleProducts