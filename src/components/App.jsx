import { useState } from 'react'
import Text from './Text'
import Button from './Button'

import '../sass/components/_App.scss'

import Counter from './Counter'
import Form from './Form'

function App() {

  const handleClick = (e) => {
    console.log(`soy un boton ${e.target.className}`) ;
  }

  return (
    <>
       
        <Text as="h1" text="Hola, soy un H1" />
        <Button label="apretame" color="primary" onClick={handleClick} />
        <Button label="apretame" color="primary" variant='outline' onClick={handleClick} />
        <Button label="apretame" color="secondary" onClick={handleClick} />
        <Button label="apretame" color="secondary" variant='outline' onClick={handleClick} />
        <Counter />
        <Form />
      
    </>
  )
}

export default App
