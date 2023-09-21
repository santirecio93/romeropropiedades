import React from 'react'


export default 
function clase3() {
  // if ternario
  const condition = true;
  condition? console.log("verdadero"):console.log("Falso")
  // spread operation
  const array= [1,2,3,4,]
  const array2 = [...array,5,6,7,8]
  console.log(array2)

  //propiedades Dinamicas
  const variable="jajaja";
  const obj = {hola:"mundo", ["hola" + variable]: "mundo2"}
  console.log(obj)

  //desestructuracion
  // deep matching


  return (
    <div></div>
  )
} 

