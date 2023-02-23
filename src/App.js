import "./App.css";
import Boton from "./Boton";
import { useState } from "react";

function App() {
  
  let [valor, setValor] = useState(0);
  
  function sumaUn() {
    setValor(++valor);
  }

  function restaUn() {
    setValor(--valor);
  }
  
  function reset() {
    setValor(0);
  }

  return (
    <>
      <div className="App">
        <h1>{valor}</h1>

        <Boton texto="+" op={sumaUn}/>
        <Boton texto="-" op={restaUn}/>
        <Boton texto="Reset" op={reset}/>

      </div>
    </>
  );
}

export default App;