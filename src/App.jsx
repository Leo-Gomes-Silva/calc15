import { useState } from "react";

export default function App() {
  const [valorComDesconto, setValorComDesconto] = useState(null);
  const [showValor, setShowValor] = useState(0)
  
  function handleSubmit(e) {
    e.preventDefault();
    const valor = e.target.num.value;

    setValorComDesconto((valor / 100) * 85);
    setShowValor(valor)
    
    e.target.num.value = ""
  }
  return (
    <div className="container" >
      <form className="form" onSubmit={handleSubmit}>
        <label className="label-text" htmlFor="num">Digite um valor:</label>
        <input className="value-text" id="num" type="number" step="0.010" />
        <input className="btn" type="submit" value="Calcular" />
      </form>
      {valorComDesconto && (
        <>
          <p className="original">valor original: R${`${showValor}`}</p>
          <p className="desconto">valor com desconto: R${`${valorComDesconto}`}</p>
        </>
      )}
    </div>
  );
}
