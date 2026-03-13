import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <div>
          <input type="number" value={vize1} onChange={(e) => setVize1(Number(e.target.value))} />
        </div>
        <div>
          <input type="number" value={vize2} onChange={(e) => setVize2(Number(e.target.value))} />
        </div>

        <div>
          <button onClick={ortalamaBul}>Ortalama Bul </button>
        </div>
      </div>
    </>
  )
}

export default App
