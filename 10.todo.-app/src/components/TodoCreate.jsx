import React from 'react'
import '../App.css';
import { useState } from 'react'

function TodoCreate({ onTodoCreate }) {

    const [newTodo, setNewTodo] = useState('');

    const createTodo = () => {

        if (!newTodo) return;

        const request = {
            id: Math.floor(Math.random() * 33333),
            content: newTodo
        }

        onTodoCreate(request);
        setNewTodo('');

    }

    return (
        <div className='todo-create'>Todo Create
            <input
                value={newTodo}
                onChange={
                    (e) => setNewTodo(e.target.value)
                }
                className='todo-input' type='text' placeholder='Todo Giriniz' />
            <button onClick={createTodo} className='todo-create-button'>Todo Oluştur</button>

        </div>
    )
}

export default TodoCreate