import React from 'react'
import CardWidget from '../cardWidget/CardWidget'
import "./styles.css"
export default function ({titulo,marca,precio}) {
  return (
    <div className="cardFather">
        <p>{titulo}</p>
        <p>{marca}</p>
        <p>{precio}</p>
    </div>
  )
}
