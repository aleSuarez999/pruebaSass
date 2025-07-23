import React, { useContext, useEffect, useState } from 'react'
import Text from './Text'
import Button from './Button'
import CartContext from '../context/CartContext'
import Box from './Box'

function Counter({prod}) {

    const {cartModif, shoppCart} = useContext(CartContext)
    const [contador, setContador] = useState(0)

    const prodEncontrado = shoppCart.find(obj => obj.prod.id === prod.id)
   
    const increment = () => {
        setContador(contador + 1)
        cartModif(prod, contador + 1)
    }

    const decrement = () => {
        setContador(contador - 1)
        cartModif(prod, contador - 1)
    }
    
    useEffect(() => {
      setContador(prod.cantidad)
     // console.log("PROD",prod)
    //  console.log("PRODCANT",prod.cantidad)
    }, [shoppCart])
    
  
    

   // console.log(prod)
  return (
    <>
      <Box className="d-flex">
        <Button id="resta" label="-" onClick={decrement} disabled={contador === 0} />
        <Text as="span" text={contador} className="pr-1 pl-1" />
        <Button label="+" id="suma" onClick={increment}  />
      </Box>
  </>
  )
}

export default Counter