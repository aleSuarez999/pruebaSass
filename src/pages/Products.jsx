import React, { useContext, useEffect, useState } from 'react'
import Text from '../components/Text'
import Card from '../components/Card'

//import {products} from "../data/products"
import { useParams } from 'react-router'
import CartContext from '../context/CartContext'
//import { getProducts } from '../utils/api'


export default function Products() {
   const {products} = useContext(CartContext)
/*  
  sin el context
  const [products, setProducts] = useState([])
  useEffect(() => {
      getProducts()
      .then(data => setProducts(data))
      .catch(err => console.error(err))
      .finally(() =>console.log(products))
  
    
  }, [])
 */
  const {category} = useParams() // con esto leemos la categoria que viene del ruteo
  
  const [cateProds, setCateProds] = useState([])  
  
  useEffect(() => {
    setCateProds(products.filter((data) => data.brand === category))
    
  }, [category])

 return (
  <>
        <Text as="h2" text="Productos" />
        <div className='product__grid'>
        {
            cateProds.map(data => 
                <Card key={data.id} {...data} />
            )
        }
          </div>
    </>
  )
}
