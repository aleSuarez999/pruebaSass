import React from 'react'
function Button({
      label, 
      color = "primary", // valor default
      variant = "solid",
      onClick,
      ...props
                })
{
  return (
    <button className={ `btn btn__${color} btn__${variant}`}  
      onClick={onClick} {...props}
    >
        {label}
    </button>
  )
}

export default Button