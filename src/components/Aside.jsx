import React from 'react'
import { NavLink } from 'react-router'
import {products} from "../data/products"

function Aside() {

  const categories = products.map(prod => prod.category) // esto trae todas una por registro
  const categories2 = [...new Set(categories)];
  //const categories = products.filter(prod => (categories[prod.category]) )

  console.log(categories2)
  //return 0
  return (
    <aside>
        <nav>
          {
            categories2.map( 
                            cate => {
                             <NavLink to = `/products/${cate}` >{cate}</NavLink>
                            }
                         )
          }
        </nav>
    </aside>
  )
}

export default Aside