import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import TodoCreate from './components/TodoCreate'
import TodoList from './components/TodoList'


function App() {
  const [todos, setTodos] = useState([])

  return (
    <div className='App'>
      <div className='main'>
        <TodoCreate />
        <TodoList />

      </div>
    </div>
  )
}

export default App
