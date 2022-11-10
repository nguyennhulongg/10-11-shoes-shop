import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Filters from '../filters/Filters';
import './allProducts.css'

const AllProducts = () => {
  const baseURL= 'https://636b4fca7f47ef51e12cb634.mockapi.io/api/v1/shoesShop'
  const [listAllShoes, setListAllShoes] = useState([]);

  useEffect(() => {
    axios.get(baseURL).then(res => {
      setListAllShoes(res.data)
    })
  }, [])

  return (
    <div className='shop-container'>
      <img className='shop-all-header' src='https://cdn.sanity.io/images/qa41whrn/prod/f2567b80766f9fc263ca56d042cc6f3baf3c2389-1440x120.jpg?w=1440&q=75&auto=format'/>
        <div className='link'>
          <span>Home</span>
          <li className='point'>Shop All</li>
        </div>
        <h2 className='page-title'>SHOP ALL</h2>
        <Filters />
        <div className='product-amount'>
          <h3>
            {listAllShoes.length > 1 ?
              `${listAllShoes.length} Products` : 
              `${listAllShoes.length} Product`}
          </h3>
        </div>
      <div className='all-products-container'>
        { listAllShoes.map(item => {
          return (
            <div className='all-products-content' key={item.id}>
              <img className='all-products-image' src={item.shoesImage} />
              <div className='buy-all-products'>
                <div className='all-products-information'>
                  <p className='shoes-name'>{item.shoesName}</p>
                  <div>
                    <p className='shoes-price'>{item.salePrice ? <del>${item.price}</del> : item.price}</p>
                    { item.salePrice ? <p>${item.salePrice}</p> : 'Not sale'}
                  </div>
                </div>
                {/* <div className='buy-container'>
                  <Button className='buy-tab-all-btn'>Buy Now</Button>
                </div> */}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default AllProducts