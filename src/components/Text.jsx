import React, { createElement } from 'react'

function Text({ as,
   text,
   ...props
  
  }) { // desestructuro 
  
  return (
    // as es el tipo , y todas las propiedades que va a tener value id name etc
    // si App llama al Text App es el parent de text text es el children de app
      createElement(as, { ...props, children: text  } )
    
  )
}

export default Text