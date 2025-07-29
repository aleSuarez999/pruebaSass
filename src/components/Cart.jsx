import React, { useContext, useEffect, useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartFlatbedSuitcase, faCartPlus, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import CartContext from '../context/CartContext'
import Modal from './Modal'
import Text from './Text'
import Counter from './Counter'
import Box from './Box'
import Button from './Button'

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
  
    const confirmCart = () => {
      alert("Compra Confirmada")
      
    }


  // Cleanup: Remove event listener when modal closes or component unmounts
 
  //console.log(shoppCart)
  return (
   <>
      <div className='cart__container' >
        {
          (cantidadTotal > 0) && (<div className="cart__badge" role='button' onClick={() => setShowModal(true)}   >{cantidadTotal}</div>)
          }
          <FontAwesomeIcon icon={faShoppingCart} className='faShopping' color='cian'  size="xl"/>
      </div>
      
      <Modal showModal={showModal} closeModal={() => setShowModal(false)} >
        <div className=''>
          <div className='rotulo'>
            <Text as="span" >Producto</Text>
            <Text as="span"  className="">Cantidad</Text>

            <Text as="span"  > Precio x U</Text>
            <Text as="span" className="mr-4"  >Subtotal </Text>
          </div>
          {
            shoppCart.map(
              obj => 
                <div key={obj.prod.id} className='d-flex align-center  p-0 pb-0 pt-0 ml-2'>
                    <img src={obj.prod.image} className='modal-image mr-2' />
                    
                   
                    <Text as="h4"  className="d-flex w-100 jcss ml-2"  >{obj.prod.name}</Text>
                    <Counter prod={obj}  className="d-flex jcfe ml-4 "  />
                    <Text as="span"   className="d-flex  w-100 jcsa"  > {`$ ${obj.prod.amount}`}</Text>
                    <Text as="span"   className="d-flex  w-100 jcsa "  > {`$ ${obj.prod.amount * obj.cantidad}`} </Text>
                </div>
                
                
            )
            

          }
              <hr />
            
              <div>
                  {(costoTotal > 0) ? (
                    <Box className="cart__summary">
                      <Text as="span"  className="d-flex" >Total: </Text> 
                      <Text as="span"  className="d-flex" > {`$ ${costoTotal}`} </Text> 
                    </Box>) : <Text className="d-flex jcc w-100" as="h4" > No hay productos en el carrito</Text>}
              </div>
        </div>
        <div className='confirm__container d-flex jcc'>
            <Button className="btn" onClick={confirmCart} label='Confirmar Compra' />
        </div>
      </Modal>

    </>
     
  )
 
}

export default Cart