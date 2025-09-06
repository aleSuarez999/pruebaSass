import React, { useContext, useEffect, useState } from 'react'
import Text from '../components/Text'
import Card from '../components/Card'
 
import { useParams } from 'react-router'
import CartContext from '../context/CartContext'
import Box from '../components/Box'

export default function Products() {
   const {products} = useContext(CartContext)
  const [loading, setLoading] = useState(true)

  const {category} = useParams() 
  
  const [cateProds, setCateProds] = useState([])  
  
  useEffect(() => {
    setCateProds(products.filter((data) => data.brand === category))
    
  }, [category])

  if (loading) {
    return <div>Cargando producto...</div>
  }

 return (
  <>
         <Text as="h2" >Productos</Text>
        <div className='product__grid'>
        {
            cateProds.map(data => 
              <Box key={data._id} className="col-xs-12 col-sm-6 col-lg-4 col-xl-3">
                <Card key={data._id} {...data} prod={data}  />
              </Box>
            )
        }
          </div>
    </>
  )
}
