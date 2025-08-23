import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router'
import { getProducts } from '../utils/apiMongo'

function Aside() {

  const [products, setproducts] = useState([])  

    useEffect(() => {
      getProducts()
      .then(prods => setproducts(prods))
      .catch(err => console.error(err))
      .finally(
        )
      
    }, [])

  const categories = products.map(prod => prod.brand) 
  const categories2 = [...new Set(categories)];

  return (
    <aside>
        <nav>
          {
            categories2.map(
                    (cate, id) =>  

                 
                        <NavLink key={id} to={`/products/${cate}`} >{cate}</NavLink>
                   
                  )
          }
        </nav>
    </aside>
  )
}

export default Aside