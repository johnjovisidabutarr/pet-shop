import { useEffect, useState } from 'react'
import Slider from 'react-slick'
import Arrow from './Arrow'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import axios, { BASE_URL } from '../../api/axios'
import './Products.css'
import Modal from '../Modal/Modal'
import Cart from '../Cart/Cart'

const Products = () => {
  const [showModal, setShowModal] = useState(false)
  const [products, setProducts] = useState([])
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get('/api/product/get-all')
        setProducts(response.data)
      } catch (error) {
        console.log(error)
      }
    }

    getProducts()
  }, [])

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
  }

  return (
    <div className='products' id='product'>
      <h5>Products</h5>

      <h3>Products for your</h3>
      <h3>Best friend</h3>

      <div className='products-container'>
        <Slider {...settings}>
          {products.map((product, index) => (
            <div key={product._id} className='product-detail'>
              <img
                src={`${BASE_URL}/api/product/get/${product.image}`}
                alt='Loading...'
                onClick={() => {
                  setShowModal(true)
                  setIndex(index)
                }}
              />
              <p>{product.name}</p>
              <p>{product.price}</p>
            </div>
          ))}
        </Slider>
      </div>

      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        products={products}
        index={index}
      />

      <Cart />
    </div>
  )
}

export default Products
