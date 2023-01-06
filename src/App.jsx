import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(1);

  //If count es mayor a 1 no deje subir a numeros positivos
  const validarNumerosMas = () => {
    if (count >= 10) {
      setCount(10);
    } else {
      setCount(count + 1);
    }
  };

  //If count es menor a 1 no deje bajar a numeros negativos
  const validarNumerosMenos = () => {
    if (count <= 1) {
      setCount(1);
    } else {
      setCount(count - 1);
    }
  };

  return (
    <div className="app">
      <div className="container">
        <div className="marc">{count}</div>
        <div className="buttons">
          <button className="button" onClick={validarNumerosMas}>
            +
          </button>
          <button className="button" onClick={validarNumerosMenos}>
            -
          </button>
          {count >= 10 ? <h1 className="mensaje">Numero máximo es 10</h1> : ""}
          {count <= 1 ? <h1 className="mensaje">Numero mínimo es 1</h1> : ""}
        </div>
      </div>
    </div>
  );
}

export default App;
