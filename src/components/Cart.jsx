import React, { useContext, useEffect, useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import CartContext from '../context/CartContext'
import Modal from './Modal'
import Text from './Text'
import Counter from './Counter'

function Cart() {
const [showModal, setShowModal] = useState(false)
const {shoppCart} = useContext(CartContext)
const [total, setTotal] = useState(0)

  useEffect(() => {
      let subtot = 0
      shoppCart.map( prod => { 
        
        subtot += prod.cantidad
        console.log(prod.cantidad)
       }
      )
      setTotal(subtot)
      // sumo para el nro total dentro del carrito

  }, [shoppCart])
  
  

  return (
   <>
      <div className='cart__container' >
          <div className="cart__cantidad" role='button' onClick={() => setShowModal(true)}>{total}</div>
          <FontAwesomeIcon icon={faShoppingCart} style={{border: "green"}} size="xl"/>
      </div>
      
      <Modal showModal={showModal} closeModal={() => setShowModal(false)} >
        <div className=''>
          {
            shoppCart.map(
              obj => 
                <div key={obj.prod.id} className='d-flex align-center jcsa p-1 pb-0 pt-0 m-0'>
                    <img src={obj.prod.image} className='modal-image' />
                    <Text as="h3" text={obj.prod.name}  />
                    <Text as="span" text={obj.prod.amount}  />
                    <Text as="span" text={`$ ${obj.cantidad * obj.prod.amount}`}  />
                    <Counter prod={obj}  />
                </div>

            )
          }
        </div>

      </Modal>

    </>
  )
}

export default Cart