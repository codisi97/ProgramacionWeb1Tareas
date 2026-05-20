import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
     <div>
      <h1>Hola React</h1>
      <p>Contador: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Aumentar
      </button>
    </div>
  )
}

export default App
