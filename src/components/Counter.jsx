import React, { useContext, useState } from 'react'
import Text from './Text'
import Button from './Button'
import CartContext from '../context/CartContext'

function Counter({prod}) {
    const { decrement, increment } = useContext(CartContext)
    const [contador, setContador] = useState(0)
    //console.log(prod) // viene el producto completo
  return (
    <>
         <Button id="resta" label="-" onClick={() => 
            {
              setContador(contador - 1)
              increment(prod, contador - 1)
            }
        
        } 
            disabled={contador === 0}
          />
        <Text 
            as="span"
            text={contador}
         />

         <Button label="+" 
            id="suma"
              onClick={
                () => {
                   setContador(contador + 1)
                   increment(prod, contador + 1)
                }
              }
          />

  </>
  )
}

export default Counter