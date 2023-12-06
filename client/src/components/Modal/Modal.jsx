import { useEffect, useState } from 'react'
import { BASE_URL } from '../../api/axios'
import PropTypes from 'prop-types'
import './Modal.css'

const Modal = ({ showModal, setShowModal, products, index }) => {
  const [total, setTotal] = useState(1)
  const [isDisable, setIsDisable] = useState(true)

  useEffect(() => {
    setTotal(Number(total))
    total > 1 ? setIsDisable(false) : setIsDisable(true)
  }, [total])

  return (
    <div>
      {showModal && (
        <div className='modal'>
          <div className='modal-content'>
            <span className='close' onClick={() => setShowModal(false)}>
              &times;
            </span>
            <div className='modal-product'>
              <img
                src={`${BASE_URL}/api/product/get/${products[index].image}`}
                alt='Loading...'
              />
              <p>{products[index].name}</p>
              <div>
                <h4>Atur jumlah dan catatan</h4>
                <div className='total'>
                  <button
                    className='minus'
                    onClick={() => setTotal(Number(total) - 1)}
                    disabled={isDisable}>
                    -
                  </button>
                  <input
                    type='number'
                    value={total}
                    onChange={(e) =>
                      setTotal(e.target.value.replace(/^0+/, ''))
                    }
                  />
                  <button
                    className='plus'
                    onClick={() => setTotal(Number(total) + 1)}>
                    +
                  </button>
                </div>

                <div className='proceed'>
                  <button className='add-cart'>Add to Cart</button>
                  <button className='buy'>Buy</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

Modal.propTypes = {
  showModal: PropTypes.bool,
  setShowModal: PropTypes.func,
  products: PropTypes.array,
  index: PropTypes.number,
}

export default Modal
