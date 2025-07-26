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
    amount,
    prod,
    ...props

}) {

  const navigate = useNavigate();
  const {increment} = useContext(CartContext)
//<div role='button' className="card__container col-12 col-xs-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3" onClick={() => navigate(`/product/${id}`)}>
// <Button className="btn d-flex btn__outline jsc" label="Agregar" onClick={() => increment({id})}/>
//<Card key={data.id} {...data} prod={data} />
  //console.log(prod)
  return (
    
      <div  className="card__container col-12 col-xs-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3" >
          <img src={image} className="card__img" alt="..." />
          
          <div className="card__body">
  
              <Text as="p" className="card__title">{name}</Text>
              <Text as="p" className="card__brand">{brand}</Text> 
              <Text as="p" className="precio">{amount} </Text>
              <Box className="d-flex counter__container jcc">
                <CounterAdd prod={prod} />
              </Box>
          </div>
    </div>
  )
}

export default Card