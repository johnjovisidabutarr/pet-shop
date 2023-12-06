import { useState } from 'react'
import aboutImg from '../../../public/img/about.webp'
import './About.css'

const About = () => {
  const [isMission, setIsMission] = useState(true)

  return (
    <div className='about' id='about'>
      <div className='image'>
        <img src={aboutImg} alt='about image' />
      </div>
      <div className='text'>
        <div className='about-detail'>
          <h5>About Us</h5>
          <h3>We keep your pets</h3>
          <h3>happy all the time</h3>
        </div>

        <div className='about-description'>
          <h3>
            Welcome to Pet Shop, your go-to haven for premium pet products and
            unparalleled service.
          </h3>
        </div>

        <div className='about-mission-vision'>
          <div className='btn'>
            <button
              onClick={() => setIsMission(true)}
              className={isMission ? 'active' : ''}>
              Our Mission
            </button>
            <button
              onClick={() => setIsMission(false)}
              className={!isMission ? 'active' : ''}>
              Our Vision
            </button>
          </div>

          {isMission ? (
            <p>
              To enrich the lives of pets and their owners by providing
              top-quality products, expert guidance, and fostering a community
              that celebrates the bond between humans and animals. We are
              committed to offering a curated selection of premium pet supplies,
              promoting responsible pet ownership, and supporting local animal
              welfare initiatives. Our goal is to create a welcoming environment
              where every pet parent feels empowered, informed, and inspired to
              provide the best care for their beloved companions.
            </p>
          ) : (
            <p>
              To be the leading destination for pet enthusiasts, setting the
              standard for excellence in the pet industry. We aspire to create a
              vibrant community that shares a passion for animals, promoting a
              holistic approach to pet care that encompasses nutrition,
              wellness, and enrichment. Through continuous innovation, ethical
              practices, and a dedication to customer satisfaction, we aim to
              build enduring relationships with our customers and contribute to
              the well-being of pets in our community.
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default About
