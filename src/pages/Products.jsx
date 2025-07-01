import React, { useEffect, useState } from 'react'
import Text from '../components/Text'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'

import {products} from "../data/products"
import { useParams, useSearchParams } from 'react-router'


export default function Products() {
  //console.log(products)
  
  const {category} = useParams() // con esto leemos la categoria que viene del ruteo
  const [cateProds, setCateProds] = useState([]) //

   useEffect(() => {
    setCateProds(products.filter(data  => data.category === category))
    
  }, [cateProds])

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
