import React, { useContext, useEffect, useState } from 'react'

import Button from './Button'
import CartContext from '../context/CartContext'
import Box from './Box'
import { faTrash, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function CounterAdd(prod) { // prod = { aa=xx, bb=xx, ...}
    const { cartModif , shoppCart  } = useContext(CartContext)
    const [contador, setContador] = useState(0)
    const [addMessage, setaddMessage] = useState("")
    const prodEncontrado = shoppCart.find(obj => obj.prod.id === prod.prod.id)  
    
    useEffect(() => {
      
      //setContador(prodEncontrado.cantidad)
      //setContador(prod.cantidad)
      if (prodEncontrado?.cantidad !== contador){
          setContador(prodEncontrado?.cantidad || 0)
        //  console.log("PROD",prod)
      //    console.log("PRODCANT",prod.cantidad) 
      }
     
    }, [shoppCart])
        
    useEffect(() => {
        if (!contador)
        {
          setaddMessage("")
        }
    }, [contador])
    

    //console.log(prod) // viene el producto completo

  const increment = () => {
          setContador(contador + 1)
          cartModif(prod, contador + 1)
          setaddMessage("Agregado al Carrito")
      }

  const deleteItem = () => {
          setContador(contador - contador)
          cartModif(prod, 0)
          setaddMessage("")
      }


  return (
    <>
      <Box >
      
         <Button label="Agregar al Carrito" 
            id="suma"
              onClick={increment}  
              disabled={contador > 0} 
          />
          <span  className='cart-message d-flex jsc' >{addMessage}{(addMessage) && (<FontAwesomeIcon role='button' icon={faTrashCan} onClick={deleteItem} />)}</span>
        </Box>

  </>
  )
}

export default CounterAdd