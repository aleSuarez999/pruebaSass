import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import CartContext from '../context/CartContext'

function ProductDetail() {
  const {products} = useContext(CartContext)

  const [producto, setProducto] = useState({})

  const { id } = useParams() // leo el id que viene por el get que manda el card

  useEffect(() => {
    
    setProducto(  products.filter(prod => parseInt(prod.id) == parseInt(id))[0]    )
    
  }, [])
  
  //const producto = products.filter(prod => prod.id == id)
  //console.log(products)

  return (
    <>detalle{id}{producto.name}</>
  )
}

export default ProductDetail