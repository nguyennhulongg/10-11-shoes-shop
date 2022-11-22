import React from 'react'
import { aboutItems, supportItems } from './FooterContent'
import { FacebookOutlined, GithubOutlined, InstagramOutlined, LinkedinOutlined, RightOutlined, TwitterOutlined, YoutubeOutlined } from '@ant-design/icons'
import './footer.css'

const Footer = () => {
  return (
    <div>
      <div className='footer'>
        <div className='support-section'>
          <div className='support'>
            <p className='support-title'>Support</p>
            <div className='support-items'>
            { supportItems.map((supportItem) => {
                return (
                  <a key={supportItem.id} className='about-item' href={supportItem.link}>{supportItem.name}</a>
                )
              }) }
            </div>
          </div>
        </div>
        <div className='about-section'>
          <div className='about'>
            <p className='about-title'>About</p>
              <div className='about-items'>
                { aboutItems.map((aboutItem) => {
                  return (
                    <a key={aboutItem.id} className='about-item' href={aboutItem.link}>{aboutItem.name}</a>
                  )
              })}
            </div>
          </div>
        </div>
        <div className='newsletter-signup'>
          <p className='newsletter-title'>Newsletter sign up</p>
          <input className='newsletter-input' type='text' placeholder='Email'/>
          <button className='newsletter-button'><RightOutlined /></button>
        </div>
        <div className='social-network-icons-container'>
          <p className='social-network-title'>Our Social Networks</p>
          <div className='footer-page-information'>
            <div className='social-network-icons'>
              <a className='social-network-icon' target='blank' href='facebook.com'><FacebookOutlined /></a>
              <a className='social-network-icon' target='blank' href='facebook.com'><TwitterOutlined /></a>
              <a className='social-network-icon' target='blank' href='facebook.com'><GithubOutlined /></a>
              <a className='social-network-icon' target='blank' href='facebook.com'><InstagramOutlined /></a>
              <a className='social-network-icon' target='blank' href='facebook.com'><LinkedinOutlined /></a>
              <a className='social-network-icon' target='blank' href='facebook.com'><YoutubeOutlined /></a>
            </div>
            <div className='page-information'>
              <p>© PUMA North America, Inc. <br></br>Imprint and Legal Data</p>
            </div>
            <div className='payment-methods'>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
