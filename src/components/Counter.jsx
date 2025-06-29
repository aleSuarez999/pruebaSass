import React, { useState } from 'react'
import Text from './Text'
import Button from './Button'

function Counter() {

    const [contador, setContador] = useState(0)
    //const [disable, setDisable] = useState("disabled")
/*
    const handleClick = (e) => {
        console.log(e.target.id)
        if (e.target.label== "+")
        {
            setContador(contador + 1)
            //setDisable("")
        }
        else
            setContador(contador - 1)

    }
*/
  return (
    <>
        <Text 
            as="h3"
            text="contador"
         />
         <Button label="+" 
            id="suma"
              onClick={() => setContador(contador + 1)}
          />
        <Text 
            as="span"
            text={contador}
         />

         <Button id="resta" label="-" onClick={() => setContador(contador - 1)} 
            disabled={contador === 0}
          />


    </>
  )
}

export default Counter