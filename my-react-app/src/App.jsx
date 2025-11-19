import { useState } from "react";

function App(){
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: 20 }}>
        <h1>Мое первое сообщение на реакте</h1>
        <p>Счетчик: {count}</p>
        <button onClick={()=>setCount(count +1 )}>
          + Шаг 1
        </button>

    </div>
  )
}

export default App