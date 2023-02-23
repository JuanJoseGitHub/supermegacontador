import { useState } from "react";

function App() {
  
  let [valor, setValor] = useState(0);
  let [sumas,setSumas] = useState (0);
  let [restas,setRestas] = useState (0);

  function sumaUn() {
    setValor(++valor);
    setSumas(++sumas);
  }
  function restaUn() {
    setValor(--valor);
    setRestas(++restas);
  }
  function reset() {
    setValor(0);
  }

  return (
    <>
      <h1>{valor}</h1>
      <button onClick={sumaUn}> + {"("+sumas+")"}</button>
      <button onClick={restaUn}> - {"("+restas+")"}</button>
      <button onClick={reset}>Reset</button>
    </>
  );
}

export default App;
