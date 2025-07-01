import React from 'react'
import { NavLink } from 'react-router'
import {products} from "../data/products"
import Text from './Text'

function Aside() {

  const categories = products.map(prod => prod.category) // esto trae todas una por registro
  //const imagenes = products.map(prod => prod.image) // esto trae todas una por registro
  const categories2 = [...new Set(categories)];

  console.log(categories2)

  return (
    <aside>
        <nav>
          {
            categories2.map( 
                    cate =>   
                      <div>
                        <img src='' ></img>
                        <NavLink key={cate} to={`/products/${cate}`} >{cate}</NavLink>
                      </div>
                  )
          }
        </nav>
    </aside>
  )
}

export default Aside