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

    const [shoppCart, setshoppCart] = useState([]); // [{ producto: {}, quantity: 1}, { producto: {} y quantity: 1}]

    const cartModif = ({prod}, quantity) => {
 
        if (!quantity){
            
            setshoppCart(shoppCart.filter( (obj) => obj.prod._id !== prod._id ))

        } else {

          const findProduct = shoppCart.find( (obj) => obj.prod._id === prod._id )
          if (!findProduct){
              setshoppCart([  ...shoppCart, { prod, quantity  }  ])
                        // agrego el primer producto al carrito de ese id

          } else {

                  setshoppCart( 
                                shoppCart.map(
                                          
                                  (obj) => obj.prod._id === prod._id ? 
                                      { prod, quantity } : obj // si coincide reemplazo 
                                        
                                    ) 
                              )  

          }
        }

    }

    const decrement = (prod, quantity) => {
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