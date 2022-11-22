import { UpOutlined } from '@ant-design/icons'
import React, { useEffect, useState } from 'react'
import './scrollToTop.css'


const ScrollToTop = () => {

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 300) {
              document.querySelector('.scroll-to-top-btn').style.translate = '1px'
            } else {
              document.querySelector('.scroll-to-top-btn').style.translate = '100px'
            }
        });
    }, []);

  const goToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
};

  return (
    <div>
      <button onClick={goToTop} className='scroll-to-top-btn'>
        <UpOutlined />
      </button>
    </div>
  )
}

export default ScrollToTop