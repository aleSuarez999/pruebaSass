import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router'
//import {products} from "../data/products"
import Text from './Text'
import { getProducts } from '../utils/api'



function Aside() {

  const [products, setproducts] = useState([])  

    useEffect(() => {
      getProducts()
      .then(prods => setproducts(prods))
      .catch(err => console.error(err))
      .finally(console.log(products))
      
    }, [])

  const categories = products.map(prod => prod.brand) // esto trae todas una por registro
  console.log(categories)
  //const imagenes = products.map(prod => prod.image)
  const categories2 = [...new Set(categories)];

  console.log(categories2)

  return (
    <aside>
        <nav>
          {
            categories2.map(  // le agrego id porque sino me da error
                    (cate, id) =>   
                      <div>
                        
                        <NavLink key={id} to={`/products/${cate}`} >{cate}</NavLink>
                      </div>
                  )
          }
        </nav>
    </aside>
  )
}

export default Aside