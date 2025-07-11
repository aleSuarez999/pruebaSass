
import Text from '../components/Text'
import Card from '../components/Card'
import { useEffect, useState } from 'react'
import { getProducts } from '../utils/api'
//import {products} from "../data/products"

export default function Home() {
  

  const [products, setproducts] = useState([])
  console.log(products)
  useEffect(() => {
    getProducts()
    .then(prods => setproducts(prods))
    .catch(err => console.error(err))
    .finally(console.log(products))
    
  }, [])
  
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
