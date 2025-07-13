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
      .finally(//console.log(products)
        )
      
    }, [])

  const categories = products.map(prod => prod.brand) // esto trae todas una por registro
  const categories2 = [...new Set(categories)];

  return (
    <aside>
        <nav>
          {
            categories2.map(  // le agrego id porque sino me da error
                    (cate, id) =>  

                 
                        <NavLink key={id} to={`/products/${cate}`} >{cate}</NavLink>
                   
                  )
          }
        </nav>
    </aside>
  )
}

export default Aside