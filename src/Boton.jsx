import React from 'react'
import style from './boton.module.css'
import { useState } from 'react'

function Boton({texto,op} ) {
  
    let [clicks,setClicks] = useState (0)
      
    function ManexaBoton() {
        setClicks(++clicks)
        op()
    }
    
  return (
    <>
      
        <button className="B" onClick={ManexaBoton}>{texto} <span class="badge badge-light">{clicks}</span></button>
    </>
  )
}

export default Boton