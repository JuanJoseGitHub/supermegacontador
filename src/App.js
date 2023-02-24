import "./App.css";
import Boton from "./Boton";
import { useState, useEffect } from "react";

function App() {
  
  let [valor, setValor] = useState(0);
  let [auto,setAuto] = useState(false)
  
  function sumaUn() {
    setValor(++valor)
  }

  function restaUn() {
    setValor(--valor)
  }
  
  function reset() {
    setValor(0)
  }

  function ManexaAuto() {
    setAuto(!auto)
  }

  useEffect(
    () => {
            let codTemp
            if (auto) {codTemp=setTimeout(sumaUn,1000)}
            return () => {clearTimeout (codTemp)}
   },
    [auto,valor]
  )

  return (
    <>
      <div className="App">
        <h1>{valor}</h1>

        <Boton texto="+" op={sumaUn}/>
        <Boton texto="-" op={restaUn}/>
        <Boton texto="Auto" op={ManexaAuto}/>
        <Boton texto="Reset" op={reset}/>

      </div>
    </>
  );
}

export default App;