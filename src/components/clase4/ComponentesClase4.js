import { useState } from "react"
import "../styles.css"
import Boton from "../boton/Boton"
const ComponentesClase4=()=>{
    
    return(
    <div className={"Container"}>
        <Boton titulo ={"Home"}/>
        <Boton titulo ={"Nosotros"}/>
        <Boton titulo ={"Propiedades"}/>
        <Boton titulo ={"Contactanos"}/>
    </div>
    )
}

export default ComponentesClase4