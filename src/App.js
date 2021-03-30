import { useMemo, useState } from "react";

function App() {
  // Logica sem memo
  const [countWithoutMemo, setCountWithoutMemo] = useState(0);

  const simpleFunction = () => {
    console.log("entrou na função simples");
    return countWithoutMemo ** 2;
  };

  // Logica com memo
  const [countWithMemo, setCountWithMemo] = useState(0);

  const expensiveFunction = useMemo(() => {
    console.log("entrou na função barata");
    return countWithMemo ** 36;
  }, [countWithMemo]);

  return (
    <div>
      <h1>Funcão cara:{expensiveFunction}</h1>
      <h1>Funcão barata:{simpleFunction()}</h1>

      <button
        onClick={() => {
          setCountWithMemo(countWithMemo + 1);
        }}
      >
        Alteração com memo {countWithMemo}
      </button>
      <button
        onClick={() => {
          setCountWithoutMemo(countWithoutMemo + 1);
        }}
      >
        Alteração sem memo {countWithoutMemo}
      </button>
    </div>
  );
}

export default App;
