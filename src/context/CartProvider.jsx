import { useEffect, useState } from "react"
import CartContext from "./CartContext"
import {getProducts} from "../utils/apiMongo"



function CartProvider({children}) {

    const [products, setproducts] = useState([])
    // carga inicial de productos compartida para abajo como pide el ejercicio
    useEffect(() => {
      getProducts()
      .then(prods => setproducts(prods))
      .catch("Error cart->", err => console.error(err))
      
    }, [])

    const resetCart = () => {
      setshoppCart([]);
    }

    const [shoppCart, setshoppCart] = useState([]); // [{ producto: {}, cantidad: 1}, { producto: {} y cantidad: 1}]

    const cartModif = ({prod}, cantidad) => {
 
        if (!cantidad){
            
            setshoppCart(shoppCart.filter( (obj) => obj.prod.id !== prod.id ))

        } else {

          const findProduct = shoppCart.find( (obj) => obj.prod.id === prod.id )
          if (!findProduct){
              setshoppCart([  ...shoppCart, { prod, cantidad  }  ])
                        // agrego el primer producto al carrito de ese id

          } else {

                  setshoppCart( 
                                shoppCart.map(
                                          
                                  (obj) => obj.prod.id === prod.id ? 
                                      { prod, cantidad } : obj // si coincide reemplazo 
                                        
                                    ) 
                              )  

          }
        }

    }

    const decrement = (prod, cantidad) => {
      console.log("decremento")
    }

    return (
        <CartContext.Provider value={{
          products, 
          shoppCart,
          cartModif,
          resetCart
          }}>
            {children}
        </CartContext.Provider>
  )
}

export default CartProvider