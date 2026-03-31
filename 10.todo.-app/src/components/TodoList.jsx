import React from 'react'
import Todo from './Todo';


function TodoList({ todos }) {
    return (
        <div style={{ width: '100%', marginTop: '50px' }}>
            {
                todos && todos.map((x) => (
                    <Todo key={x.id} icerik={x} />
                ))
            }

        </div>
    )
}

export default TodoList