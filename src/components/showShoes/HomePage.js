import { Button } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './homePage.css'

const ShowAllShoes = () => {
  const baseURL= 'https://636b4fca7f47ef51e12cb634.mockapi.io/api/v1/shoesShop'
  const [listShoes, setListShoes] = useState([]);

  useEffect(() => {
    axios.get(baseURL).then(res => {
      setListShoes(res.data)
    })
  }, [])

  return (
    <div>
      <div>
        <img className='banner' src='https://cdn.sanity.io/images/qa41whrn/prod/29b0badfced4083a01d10f8fd953d64f9fed2bc9-1440x500.jpg?w=1440&q=75&auto=format'/>
      </div>
      <div className='container'>
        <h1 className='product-title'>EXPLORE BEST SELLERS</h1>
        <div className='product-content'>
          { listShoes.slice(0, 4).map(item => {
            return (
              <div className='product' key={item.id}>
                <img className='product-avatar' src={item.shoesImage}/>
                <div className='product-information-container'>
                  <div className='product-information'>
                    <p className='shoes-name'>{item.shoesName}</p>
                    <p className='shoes-price'>${item.price}</p>
                  </div>
                  {/* <div className='buy-container'>
                    <Button className='buy-btn' type="primary">Buy now</Button>
                  </div> */}
                </div>
              </div>
            )
          })}
        </div>
        <div className='theme-container'>
          <div className='theme-title'>
            <h2>PUT YOUR BEST FOOT FORWARD</h2>
            <p>SHOP OUR MUST-HAVE FOOTWEAR</p>
          </div>
          <div className='tab-gender-select'>
            <button>Men</button>
            <button>Women</button>
          </div>
        </div>
      </div>
        <div className='holiday-theme-content'>
            <img className='banner' src='https://cdn.sanity.io/images/qa41whrn/prod/f561e2da724f531d5f9560c38c7bb664e197d85b-1440x500.jpg?w=1440&q=75&auto=format'/>
            <div className='holiday-content'>
              <h1 className='holiday-title'>HOLIDAY SHOPPING<br></br>IS IN FULL SWING</h1>
              <p>Shopping Now</p>
              <div className='shopping-now'>
                <Button href='/all-products' className='shopping-btn'>Shop Now</Button>
              </div>
            </div>
          </div>
    </div>
  )
}

export default ShowAllShoes