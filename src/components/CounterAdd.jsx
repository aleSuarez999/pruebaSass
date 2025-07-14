import React, { useContext, useState } from 'react'

import Button from './Button'
import CartContext from '../context/CartContext'
import Box from './Box'

function CounterAdd({prod}) {
    const { increment } = useContext(CartContext)
    const [contador, setContador] = useState(0)
    const [addMessage, setaddMessage] = useState("")

    //console.log(prod) // viene el producto completo
  return (
    <>
      <Box >
      
         <Button label="Agregar al Carrito" 
            id="suma"
              onClick={
                () => {
                   setContador(contador + 1)
                   increment(prod, contador + 1)
                   setaddMessage("Agregado al Carrito")
                }
              }
          />
          <span id={`add_${prod.id}`} className='cart-message d-flex jsc' >{addMessage}</span>
        </Box>

  </>
  )
}

export default CounterAdd