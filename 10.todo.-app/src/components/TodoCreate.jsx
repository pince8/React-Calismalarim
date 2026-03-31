import React from 'react'
import '../App.css';


function TodoCreate() {
    return (
        <div className='todo-create'>Todo Create
            <input className='todo-input' type='text' placeholder='Todo Giriniz' />
            <button className='todo-create-button'>Todo Oluştur</button>

        </div>
    )
}

export default TodoCreate