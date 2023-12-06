import './Footer.css'
import { FaFacebookF } from 'react-icons/fa6'
import { FaXTwitter } from 'react-icons/fa6'
import { FaInstagram } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'

import paymentLogo from '../../../public/img/paymentlogo.png'

const Footer = () => {
  return (
    <footer>
      <div className='footer-grid-container'>
        <div className='footer-grid-item'>
          <h5>Get to know us</h5>

          <div className='footer-detail'>
            <a href=''>Blog</a>
            <a href=''>News</a>
            <a href=''>Awards</a>
            <a href=''>Grants</a>
          </div>
        </div>

        <div className='footer-grid-item'>
          <h5>Popular Brand</h5>

          <div className='footer-detail'>
            <a href=''>Product 1</a>
            <a href=''>Product 2</a>
            <a href=''>Whiskas</a>
            <a href=''>Royal Canin</a>
          </div>
        </div>

        <div className='footer-grid-item'>
          <h5>Useful Stuff</h5>

          <div className='footer-detail'>
            <a href=''>Help & FAQ</a>
            <a href=''>Terms of Service</a>
            <a href=''>Delivery & Returns</a>
            <a href=''>Contact Us</a>
          </div>
        </div>
        <div className='footer-grid-item'>
          <h5>Get social with us</h5>

          <div className='footer-icon'>
            <a href=''>
              <FaFacebookF />
            </a>
            <a href=''>
              <FaInstagram />
            </a>
            <a href=''>
              <FaXTwitter />
            </a>
            <a href=''>
              <FaYoutube />
            </a>
          </div>
        </div>

        <div className='footer-grid-item'>
          <h5>Payment method</h5>
          <div className='footer-img'>
            <img src={paymentLogo} alt='' />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
