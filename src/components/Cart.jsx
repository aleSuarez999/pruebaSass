import React, { useContext, useEffect, useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import CartContext from '../context/CartContext'

function Cart() {

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

  }, [shoppCart])
  
  

  return (
    <div className='cart__container' >
        <div className="cart__cantidad">{total}</div>
        <FontAwesomeIcon icon={faShoppingCart} style={{border: "green"}} size="xl"/>
    </div>
  )
}

export default Cart