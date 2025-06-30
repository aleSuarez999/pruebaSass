import React from 'react'
import Text from '../components/Text'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'

import {products} from "../data/products"

export default function Home() {
  //console.log(products)
  return (
    <>
        <Text as="h2" text="Productos" />
        <div className='product__grid'>
        {
            products.map(data => 
                <Card key={data.id} {...data} />
            )
        }
        </div>
    </>
  )
}
