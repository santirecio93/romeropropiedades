import React from 'react'

export default function polyfill() {

    Array.prototype.customMap =function(callback){  
        let result = []
        for ( let i = 0;i < this.lenght; i++){
            const element = this[i]
            result.push(callback(element))
        }
        return result;
    };

    const arr = [1,2,3,4,5]
    
    const arrNuevo = arr.customMap((elm)=> elm * 2
    );


    console.log("resultado del custommap",arrNuevo)

  return (
    <div>Polyfill</div>
  )
}
