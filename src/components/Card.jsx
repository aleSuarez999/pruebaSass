import React, { useContext } from 'react'
import Text from './Text'
import { useNavigate } from 'react-router'
import CartContext from '../context/CartContext';
import CounterAdd from './CounterAdd';
import Box from './Box';

function Card({
    id,
    name,
    brand,
    image,
    category,
    amount,
    prod,
    ...props

}) {

  const navigate = useNavigate();
  const {increment} = useContext(CartContext)

  return (
  
          <Box className="card__body">
              <img src={image} className="card__img" alt="..." />
              <Text as="p" className="card__title">{name}</Text>
              <Text as="p" className="card__category">Categoria: {category}</Text> 
              <Text as="p" className="precio">{`$ ${amount}`} </Text>
              <Box className="d-flex counter__container jcc">
                <CounterAdd prod={prod} />
              </Box>
          </Box>
    
  )
}

export default Card