import React from 'react'
import Text from './Text'
import Button from './Button'

function Card({
    name,
    category,
    image,
    amount,
    ...props

}) {

  return (
    <div className="card__container col-12 col-xs-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
          <img src={image} className="card__img" alt="..." />
          
          <div className="card__body">
              <Text as="h4" className="card__title"  text={name} />
              <Text as="p" className="card__text" text={category} />
              <Text as="p" className="precio" text={amount} />
    
              <Button className="btn btn__outline" label="Comprar" />
          </div>
    </div>
  )
}

export default Card