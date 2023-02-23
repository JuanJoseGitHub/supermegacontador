import React from 'react'
import { useState } from 'react'

function Boton({texto,op} ) {
  
    let [clicks,setClicks] = useState (0);
    
    function ManexaBoton() {
        setClicks(++clicks);
        op()
    }
    
  return (
    <>
        <button onClick={ManexaBoton}>{texto} ({clicks})</button>
    </>
  )
}

export default Boton