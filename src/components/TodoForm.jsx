import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../store/slice/todoSlice';
const TodoForm = () => {
    const dispatch = useDispatch();
    const [todo, setTodo] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if (todo != '') {
            dispatch(addTodo(todo))
            setTodo('');
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="flex align-center w-full">
                <input className='w-full bg-white/20 h-9 outline-none px-4 -y-2 rounded-l-lg' value={todo} onChange={(e) => setTodo(e.target.value)} type="text" placeholder='Write Todo ...' />
                <button className='bg-green-600 text-white px-4 rounded-r-lg'>Add</button>
            </div>
        </form>
    )
}

export default TodoForm
