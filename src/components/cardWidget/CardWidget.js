import React from 'react'
import "./styles.css"
import Cardfather from '../card-father/Cardfather'



const productos=[{
    titulo:"E6",
    marca:"Motorola",
    precio:"$100",
},
{
    titulo:"E7",
    marca:"Motorola",
    precio:"$200"
},
{   
    titulo:"E8",
    marca:"Motorola",
    precio:"$400"}
]

export default function CardWidget() {
  return (
    <div class="flex-container">
        {productos.map((elm)=>{
            return <Cardfather titulo={elm.titulo} marca={elm.marca} precio={elm.precio}/>
        })} 
    </div>
  )
}
