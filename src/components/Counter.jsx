import { useState } from "react"; //-> hooks

// imutabilidade - 
// cria um novo espaço na memoria (array, objeto, variavel e etc) ao invés de alterar
// não altera o valor

export function Counter() {
  const [counter, setCounter] = useState(0);
  // o useState retorna um array com dois valores sendo:
  // array[0] = valor da variavel
  // array[1] =
  function increment() {
    setCounter(counter + 1);
  }
  return (
    <div>
      <h2>{counter}</h2>
      <button type="button" onClick={increment}>
        increment
      </button>
    </div>
  );
}
