import React from 'react'
import './ButtonPrimary.css'

function ButtonPrimary({name, type, onClick}) {
  return (
    <button className="buttonPrimary" type={type} onClick={onClick}>
        {name}
    </button>
  )
}

export default ButtonPrimary
