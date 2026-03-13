import { useDebugValue, useEffect, useState } from 'react'
import './App.css'


function App() {
  const [count, setCount] = useState(0)
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  useEffect(() => {
    console.log("her zaman çalışır");
  })

  useEffect(() => {
    console.log("ilk render edildiğinde çalışır")
  }, [])

  useEffect(() => {
    console.log("ilk render edildiğinde ve FirstName state değeri değiştiğinde çalışır.");
  }, [firstName])

  useEffect(() => {
    console.log("ilk render edildiğinde ve lastname state değeri değitiğinde çalışır.");
  }, [lastName])


  return (
    <>
      <div>

        <div><button onClick={() => setFirstName("Beyza")}>Adı değiştir</button></div>

        <div><button onClick={() => setLastName("Beyza")}>Soyadı değiştir</button></div>
      </div>
    </>
  )
}

export default App
