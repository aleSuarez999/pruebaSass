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
    
      <div  className="card__container col-12 col-xs-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3" >
          <img src={image} className="card__img" alt="..." />
          
          <div className="card__body">
  
              <Text as="p" className="card__title">{name}</Text>
              <Text as="p" className="card__category">{category}</Text> 
              <Text as="p" className="precio">{amount} </Text>
              <Box className="d-flex counter__container jcc">
                <CounterAdd prod={prod} />
              </Box>
          </div>
    </div>
  )
}

export default Card