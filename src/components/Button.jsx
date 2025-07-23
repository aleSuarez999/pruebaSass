import React from 'react'
function Button({
      label = "", 
      color = "primary", // valor default
      variant = "solid",
      onClick,
      ...props // toma cualquier otra de las variables que no modifico
                })
{
  return (
    <button className={ `btn btn__${color} btn__${variant}`}  
      onClick={onClick} 
      {...props} // esto es pasar todas las propiedades que no necesito modificar
    >
        {label}
    </button>
  )
}

export default Button