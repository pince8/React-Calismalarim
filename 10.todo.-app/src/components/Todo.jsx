import React from 'react'
import { MdDeleteSweep } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import '../App.css';

function Todo() {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', border: '1px solid lightgray' }}>
            <div>
                Ben ilk todoyum
            </div>
            <div>
                <MdDeleteSweep className='todo-icon' />

                <FaEdit className='todo-icon' />
            </div>
        </div>
    )
}

export default Todo