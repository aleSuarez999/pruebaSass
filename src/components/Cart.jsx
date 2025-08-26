import React, { useContext, useEffect, useState } from 'react'
// inicio MP con la public key de prueba
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'




import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartFlatbedSuitcase, faCartPlus, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import CartContext from '../context/CartContext'
import Modal from './Modal'
import Text from './Text'
import Counter from './Counter'
import Box from './Box'
import Button from './Button'
import { postCart } from '../utils/apiMongo'
import { createPreference } from '../utils/apiMp'

function Cart() {
const [showModal, setShowModal] = useState(false)
const {shoppCart, resetCart} = useContext(CartContext)
const [cantidadTotal, setTotal] = useState(0)
const [shoppCartApi, setshoppCartApi] = useState(0)
const [shoppCartMP, setshoppCartMP] = useState(0)
const [preferenceId, setpreferenceId] = useState(null)
initMercadoPago('TEST-2d377295-b034-4bff-926d-daae34649053', {
  locale: 'es-AR'
});
  



  const costoTotal = shoppCart.reduce( // acumulador, primer parametro acc acumula, prod es el objeto a sumarizar
    (acc, prod) => acc + prod.quantity * prod.prod.amount, 0 // 0  es el indice inicial
    // esto sería el subtotal por producto
  )
  
    useEffect(() => {
      // cuando agregan o quitan elementos del carrito regenero subtotal
        setTotal ( shoppCart.reduce(
            (acc, prod) => acc + prod.quantity, 0)
        )
        
        setshoppCartApi( 
            {
              //creo un json cart con el array de productos
                cart: shoppCart.map( obj =>
                   ({
                     _id: obj.prod._id, 
                    quantity: obj.quantity}) ) 
            }
        )
        setshoppCartMP( 
            {
              //creo un json cart con el array de productos
              body: {
                items: shoppCart.map( obj =>  ({
                      id: obj.prod._id, 
                      title: obj.prod.name,
                      quantity: obj.quantity,
                      unit_price: obj.prod.amount
                  }) ),
                  notification_url: 'https://webhook.site/your-dummy-url' 
                }
            }
        )
    }, [shoppCart])
  
    const confirmCart =  async () => {
      console.log("mando a mp: ", shoppCartMP)
      // llamo al backend quien llama a la api de mp que genera el id
       const id = await createPreference(shoppCartMP)
        if (id)
        {
          console.log("recibo->", id)
          setpreferenceId(id)
      }
    

    } 



    const confirmCart1 = () => {
      // sin mp
      alert("Se envia compra a mongo")
      console.info(shoppCartApi)
      try {

        postCart(shoppCartApi)
         .then( res => {
                  console.log("RES->", res)
                if (res.ok)
                {
                    
                    okMessage(true)
                    setMsg("Compra enviada ok")
                    resetCart()
                }
          })
      } catch (error) {
        console.error("ERROR AL MANDAR CARRIDO:", error)
      }
      //
      
    }

  return (
   <>
      <div className='cart__container' >
        {
          (cantidadTotal > 0) && (<div className="cart__badge" role='button' onClick={() => setShowModal(true)}   >{cantidadTotal}</div>)
          }
          <FontAwesomeIcon icon={faShoppingCart} className='faShopping' color='cian'  size="xl"/>
      </div>
      
      <Modal showModal={showModal} closeModal={() => setShowModal(false)} >
        <div className=''>
          <div className='rotulo'>
            <Text as="span" >Producto</Text>
            <Text as="span"  className="">Cantidad</Text>

            <Text as="span"  > Precio x U</Text>
            <Text as="span" className="mr-4"  >Subtotal </Text>
          </div>
          {
            shoppCart.map(
              obj => 
                <div key={obj.prod.id} className='d-flex align-center  p-0 pb-0 pt-0 ml-2'>

                    <img src={obj.prod.image} className='modal-image mr-2' />
                   
                    <Text as="h4"  className="d-flex w-100 jcss ml-2"  >{obj.prod.name}</Text>
                    <Counter prod={obj}  className="d-flex jcfe ml-4 "  />
                    <Text as="span"   className="d-flex  w-100 jcsa"  > {`$ ${obj.prod.amount}`}</Text>
                    <Text as="span"   className="d-flex  w-100 jcsa "  > {`$ ${obj.prod.amount * obj.quantity}`} </Text>
                </div>
             )

          }
              <hr />
            
              <div>
                  {(costoTotal > 0) ? (
                    <Box className="cart__summary">
                      <Text as="span"  className="d-flex" >Total: </Text> 
                      <Text as="span"  className="d-flex" > {`$ ${costoTotal}`} </Text> 
                    </Box>) : <Text className="d-flex jcc w-100" as="h4" > No hay productos en el carrito</Text>}
              </div>
        </div>
        <div className='confirm__container d-flex jcc'>
            <Button className="btn" onClick={confirmCart} label='Confirmar Compra'  disabled={(costoTotal == 0)}  />
          { (preferenceId) && <Wallet initialization={{ preferenceId: preferenceId}} /> }
        </div>
      </Modal>

    </>
     
  )
 
}

export default Cart