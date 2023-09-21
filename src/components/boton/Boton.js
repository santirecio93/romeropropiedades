import "../styles.css"
import React from 'react'


export default function Boton({titulo}) {
  return (
    <div className="navBar">
      <button >
        {titulo}
      </button>
    </div>
  )
}
