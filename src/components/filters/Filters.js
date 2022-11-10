import React from 'react'
import './filters.css'
import { DownOutlined } from '@ant-design/icons'; 

const Filters = () => {

  const showGenderSelect = () => {
    if (document.querySelector('.gender-selector').style.display === 'none') {
      document.querySelector('.gender-selector').style.display = 'block'
    } else {
      document.querySelector('.gender-selector').style.display = 'none'
    }
  }

  const showPriceSelect = () => {
    if (document.querySelector('.price-selector').style.display === 'none') {
      document.querySelector('.price-selector').style.display = 'block'
    } else {
      document.querySelector('.price-selector').style.display = 'none'
    }
  }

  return (
    <div className='filters'>
      <div onClick={showGenderSelect} className='gender-filter'>
        <p className='gender-filter-text'>Gender</p>
        <DownOutlined />
        <div className='gender-selector'>
          <div className='male-selector'>
            <input value='Male' type='radio'/>
            <p>Male</p>
          </div>
          <div className='female-selector'>
            <input type='radio'/>
            <p>Female</p>
          </div>
        </div>
      </div>
      <div onClick={showPriceSelect} className='price-filter'>
        <p className='price-filter-text'>Price</p>
        <DownOutlined />
        <div className='price-selector'>
          <div className='price-under-fifty-selector'>
            <input type='radio'/>
            <p>Under $100</p>
          </div>
          <div className='price-fifty-to-one-hundred-selector'>
            <input type='radio'/>
            <p>$50 - $100</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Filters