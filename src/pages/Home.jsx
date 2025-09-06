
import Text from '../components/Text'
import Card from '../components/Card'
import { useContext, useEffect, useState } from 'react'
import CartContext from '../context/CartContext'
import Box from '../components/Box'
import loadingImg from '../img/loading.gif'
export default function Home() {
  const [loading, setLoading] = useState(true)
  const {products} = useContext(CartContext)
  
  useEffect(() => {
    if (products.length > 0)
      setLoading(false)
    
  }, [products])
  
  if (loading) {
    return <div><img src={loadingImg} /></div>
  }  
 


  

  return (
    
      <>    
        <Text as="h2" className="mt-7" >Productos</Text>
        
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
