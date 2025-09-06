
import Text from '../components/Text'
import Card from '../components/Card'
import { useContext, useEffect, useState } from 'react'
import CartContext from '../context/CartContext'
import Box from '../components/Box'

export default function Home() {
  const [loading, setLoading] = useState(true)
  const {products} = useContext(CartContext)
  
  useEffect(() => {
  // setLoading(true)
    
  }, [])
  
  if (products.length > 0)
  {
    //console.log(products)  
    //setLoading(false)
  }

  if (loading) {
    //return <div>Cargando productos...</div>
  }
  

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
