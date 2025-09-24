import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('Cesar')
  const [frutas, setFrutas] = useState(['Banana', 'Maçã', 'Uva'])

  return (
<>

      <h1>Contador - {name} </h1>
      <div>
        <button onClick={() => setCount(count+1) }>
          count is {count}
        </button>
        <button onClick={() => setName(name === 'Cesar' ? 'Magagnin' : 'Cesar') }>
          Trocar nome
        </button>
        {count % 2 === 0 ? <p>Par</p> : <p>Ímpar</p>}
        {count > 5 && <p>Maior que 5</p>}
        {count <= 5 && <p>Menor ou igual a 5</p>}
        {frutas.length > 0 ? (
          <ul>
            {frutas.map((fruta, index) => (
              <li key={index}>{fruta}</li>
            ))  }
          </ul>
        ) : (
          <p>Não há frutas</p>
        )}
      </div>
</>
  )
}

export default App
