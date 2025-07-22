import React, { useContext, useEffect, useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import CartContext from '../context/CartContext'
import Modal from './Modal'
import Text from './Text'
import Counter from './Counter'
import Box from './Box'

function Cart() {
const [showModal, setShowModal] = useState(false)
const {shoppCart} = useContext(CartContext)
const [cantidadTotal, setTotal] = useState(0)

  const costoTotal = shoppCart.reduce( // acumulador, primer parametro acc acumula, prod es el objeto a sumarizar
    (acc, prod) => acc + prod.cantidad * prod.prod.amount, 0 // 0 creo que es el indice inicial
    // esto sería el subtotal por producto
  )
  
    useEffect(() => {
        setTotal ( shoppCart.reduce(
            (acc, prod) => acc + prod.cantidad, 0)
        )
    
    }, [shoppCart])
    
  //console.log(shoppCart)
  return (
   <>
      <div className='cart__container' >
          <div className="cart__cantidad" role='button' onClick={() => setShowModal(true)}>{cantidadTotal}</div>
          <FontAwesomeIcon icon={faShoppingCart} style={{border: "green"}} size="xl"/>
      </div>
      
      <Modal showModal={showModal} closeModal={() => setShowModal(false)} >
        <div className=''>
          {
            shoppCart.map(
              obj => 
                <div key={obj.prod.id} className='d-flex align-center  p-1 pb-0 pt-0 m-0'>
                    <img src={obj.prod.image} className='modal-image' />
                    <Text as="h3" text={obj.prod.name}  className="d-flex w-100 jcss ml-2"  />
                    <Text as="span" text={obj.prod.amount}  className="d-flex  w-100 jcsa"  />
                    <Box as='span' className="d-flex w-100 jcfe" >
                      <Counter prod={obj}  className="d-flex  w-100 jcfe"  />
                    </Box>
                </div>
                
                
            )
            

          }
              <hr />
            
              <div>
                  {(costoTotal > 0) ? (<Box className="d-flex w-100 jcsa"><Text as="span" text="Total: " /> <Text as="span" text={`$ ${costoTotal}`} /> </Box>) : <Text className="d-flex jcc w-100" as="h4" text="No hay productos en el carrito"/>}
              </div>
        </div>

      </Modal>

    </>
  )
}

export default Cart