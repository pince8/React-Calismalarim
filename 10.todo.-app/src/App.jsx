import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import TodoCreate from './components/TodoCreate'
import TodoList from './components/TodoList'


function App() {
  const [todos, setTodos] = useState([])

  const createTodo = (newTodo) => {
    setTodos([...todos, newTodo])
  }

  return (
    <div className='App'>
      <div className='main'>
        {/* /*onTodoCreate adından bir props tanımlıyoruz*/
        /*createTodo yu da ona prop olarak geçiyoruz*/}
        <TodoCreate onTodoCreate={createTodo} />
        <TodoList todos={todos} />

      </div>
    </div>
  )
}

export default App
