import { useState } from 'react';
import './App.css';

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [resultado, setResultado] = useState('');

  const soma = () => {
    const resultadoSoma = Number(num1) + Number(num2);
    setResultado(resultadoSoma);
  };

  const sub = () => {
    const resultadoSubtracao = Number(num1) - Number(num2);
    setResultado(resultadoSubtracao);
  };

  const mult = () => {
    const resultadoMultiplicacao = Number(num1) * Number(num2);
    setResultado(resultadoMultiplicacao);
  };

  const divs = () => {
    const resultadoDivisao = Number(num1) / Number(num2);
    setResultado(resultadoDivisao);
  };

  return (
    <>
      <h1>Calculadora</h1>
      <div className="calculadora">
        <h3>Digite o valor que deseja calcular</h3>
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          placeholder="Número 1"
        />
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          placeholder="Número 2"
        />
        <br />
        <br />
        <button onClick={soma}>Soma</button>
        <button onClick={sub}>Subtração</button>
        <button onClick={mult}>Multiplicação</button>
        <button onClick={divs}>Divisão</button>
        <h3 id="resultado">Resultado: {resultado}</h3>
      </div>
    </>
  );
}

export default App;