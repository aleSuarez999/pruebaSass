
import Text from '../components/Text'
import Card from '../components/Card'
import { useContext, useEffect, useState } from 'react'
import CartContext from '../context/CartContext'
//import { getProducts } from '../utils/api'
//import {products} from "../data/products"

export default function Home() {
  
  
    //const [products, setproducts] = useState([])
    //console.log(products)
    /*
    useEffect(() => {
      getProducts()
      .then(prods => setproducts(prods))
      .catch(err => console.error(err))
      .finally(//console.log(products)
        )
    }, [])
  */
  const {products} = useContext(CartContext)

  return (
    

      <>    
        <Text as="h2" text="Productos" />
        
        <div className='product__grid'>
        {
            products.map(data => 
                <Card key={data.id} {...data} prod={data} />
            )
        }
          </div>
      </>

    
  )
}
