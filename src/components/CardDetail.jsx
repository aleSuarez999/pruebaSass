import React, { useContext, useEffect, useState } from 'react'
import Text from './Text'
import Box from './Box'
import { NavLink, useParams } from 'react-router'
import { getProductById } from '../utils/apiMongo'
import Container from './Container'


function CardDetail() {

   // const {products} = useContext(CartContext)
    const [loading, setLoading] = useState(true)
    const [prod, setProducto] = useState({})
  
    //const {increment} = useContext(CartContext)
  
    const { id } = useParams() // leo el id que viene por el get que manda el card
    
    useEffect(() => {
      //console.log("PRODUCTDETAILS: ", id)
      // llamada con api
      setLoading(true)
      getProductById(id)
          .then((res) => {
            //console.log("RESP API", res)
            setLoading(false)
            setProducto(res)
            
          })
          .catch((error) => console.error("error al obtener producto: ", error))
  
    }, [])
    
     if (loading) {
      return <div>Cargando producto...</div>
    }
  
    if (!prod) {
      return <div>Producto no encontrado</div>
    }

  return (
      <Container as="main">
        <Text as="h2" className=""><NavLink to="/" >Productos</NavLink> / Detalle </Text>
       
        <Box className='product__grid'>
          <div  className="cardDetail__container col-12 d-flex" >


            <Box className="cardDetail__body ">
              <div className='d-flex jcfs '>
                <img src={prod.img} className="cardDetail__img" alt="..." />
              </div>

              <div className='d-flex jcfs '>
                <Text as="h2" >{`${prod.name}`}</Text>
              </div>
              <div className='d-flex jcfs '>
                <Text as="span" >{`${prod.shortDescription}`} </Text>
              </div>
              <div className='d-flex jcfs '>
                
                <Text as="p" >
                  <Text as="b" >Categoria: </Text>
                  {`${prod.category}`} </Text>
              </div>
              <div className='d-flex jcfs '>
                
                <Text as="p" >
                  <Text as="b" >Marca: </Text>
                  {`${prod.brand}`} </Text>
              </div>
              <div className='d-flex jcfs '>
                 
                <Text as="p" >
                  <Text as="b" >Stock: </Text>
                  {`${prod.shortDescription}`} </Text>
              </div>
              <div className='d-flex jcfs '>
                
                <Text as="p" >
                  <Text as="b" >Edad: </Text>
                  {`${prod.ageFrom} - ${prod.ageTo}`} años</Text>
              </div>
              <div className='d-flex jcfs '>
                
                <Text as="p" >    
                  <Text as="b" >Detalles: </Text>
                  {`${prod.largeDescription}`} </Text>
              </div>
              <div className='d-flex jcfs '>
                
                <Text as="p" >
                  <Text as="b" >Precio: </Text>
                  $ {`${prod.amount}`} </Text>
              </div>
            
            </Box>
          </div>

        </Box>
      </Container>
  )
}

export default CardDetail