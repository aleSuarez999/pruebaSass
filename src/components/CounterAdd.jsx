import React, { useContext, useState } from 'react'

import Button from './Button'
import CartContext from '../context/CartContext'
import Box from './Box'

function CounterAdd(prod) { // prod = { aa=xx, bb=xx, ...}
    const { cartModif   } = useContext(CartContext)
    const [contador, setContador] = useState(0)
    const [addMessage, setaddMessage] = useState("")

    //console.log(prod) // viene el producto completo

  const increment = () => {
                   setContador(contador + 1)
                   cartModif(prod, contador + 1)
                   setaddMessage("Agregado al Carrito")
                }

  return (
    <>
      <Box >
      
         <Button label="Agregar al Carrito" 
            id="suma"
              onClick={increment}
          />
          <span className='cart-message d-flex jsc' >{addMessage}</span>
        </Box>

  </>
  )
}

export default CounterAdd