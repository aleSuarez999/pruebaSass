import React, { useContext, useEffect, useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartFlatbedSuitcase, faCartPlus, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
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
          <div className="cart__badge" role='button' onClick={() => setShowModal(true)}>{cantidadTotal}</div>

          <FontAwesomeIcon icon={faShoppingCart} className='faShopping' color='red'  size="xl"/>
      </div>
      
      <Modal showModal={showModal} closeModal={() => setShowModal(false)} >
        <div className=''>
          <div className='rotulo'>
            <Text as="span" text="Producto"  />
            <Text as="span" text="Cantidad"  className="" />

            <Text as="span" text="Precio x U"  />
            <Text as="span" text="Subtotal"   className="mr-4"  />
          </div>
          {
            shoppCart.map(
              obj => 
                <div key={obj.prod.id} className='d-flex align-center  p-0 pb-0 pt-0 ml-2'>
                    <img src={obj.prod.image} className='modal-image mr-2' />
                    
                   
                    <Text as="h4" text={obj.prod.name}  className="d-flex w-100 jcss ml-2"  />
                    <Counter prod={obj}  className="d-flex jcfe ml-4 "  />
                    <Text as="span" text={`$ ${obj.prod.amount}`}  className="d-flex  w-100 jcsa"  />
                    <Text as="span" text={`$ ${obj.prod.amount * obj.cantidad}`}  className="d-flex  w-100 jcsa "  />
                </div>
                
                
            )
            

          }
              <hr />
            
              <div>
                  {(costoTotal > 0) ? (<Box className="cart__summary"><Text as="span" text="Total: " className="d-flex" /> <Text as="span"  className="d-flex"  text={`$ ${costoTotal}`}  /> </Box>) : <Text className="d-flex jcc w-100" as="h4" text="No hay productos en el carrito"/>}
              </div>
        </div>

      </Modal>

    </>
  )
}

export default Cart