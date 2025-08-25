
import Text from '../components/Text'
import Card from '../components/Card'
import { useContext, useEffect, useState } from 'react'
import CartContext from '../context/CartContext'
import Box from '../components/Box'

export default function Home() {
  
  const {products} = useContext(CartContext)

  return (
    
      <>    
        <Text as="h2" >Productos</Text>
        
        <div className='product__grid'>
        {
            products.map(data => 
              <Box key={`B${data._id}`} id={`B${data._id}`} className="col-xs-12 col-sm-6 col-lg-4 col-xl-3">
                <Card  {...data} prod={data} />
              </Box>
            )
        }
          </div>
      </>

    
  )
}
