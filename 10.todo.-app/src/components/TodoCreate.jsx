import React from 'react'
import '../App.css';


function TodoCreate({ onTodoCreate }) {

    const [newTodo, setNewTodo] = useState('');

    const createTodo = () => {

        if (!newTodo) return;

        const request = {
            id: Date.now,
            content: newTodo
        }

        onTodoCreate(request);

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