
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
              <Box key={data.id} className="col-xs-12 col-sm-6 col-lg-4 col-xl-3">
                <Card key={data.id} {...data} prod={data} />
              </Box>
            )
        }
          </div>
      </>

    
  )
}
