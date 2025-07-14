import { useEffect, useState } from "react"
import CartContext from "./CartContext"
import {getProducts} from "../utils/api"



function CartProvider({children}) {

    const [products, setproducts] = useState([])
    // carga inicial de productos compartida para abajo
    useEffect(() => {
      getProducts()
      .then(prods => setproducts(prods))
      .catch("Error cart->", err => console.error(err))
      //.finally(() => console.log("Productos Cargados en Context"))
    }, [])

    const [shoppCart, setshoppCart] = useState([]); // { producto: {} y cantidad: 1}

    const increment = (prod, cantidad) => {
     // console.log("llega a incrementa", prod)

      const findProduct = shoppCart.find( obj => obj.prod.id === prod.id )
      //console.log(findProduct)
      {
        if (!findProduct){
        setshoppCart([
            ...shoppCart,
            {
              prod: prod,
              cantidad
            }

          ])
        } 
        else {

            if (cantidad == 0)
            {
              setshoppCart(shoppCart.filter(obj => obj.prod.id !== prod.id))
            }
            else
            {
                setshoppCart(
                      shoppCart.map(
                        obj => 
                            obj.prod.id === prod.id ? 
                        {
                          prod: prod,
                          cantidad
                        }
                        : obj // si coincide reemplazo sino 
                    
                    ) 
                )  
            }
          }
      }

      //console.log("shoppCart", shoppCart)

    }

    const decrement = (prod) => {
      console.log("decremento")
    }

    return (
        <CartContext.Provider value={{
          products, 
          shoppCart,
          increment,
          decrement}}>
            {children}
        </CartContext.Provider>
  )
}

export default CartProvider