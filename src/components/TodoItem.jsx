import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { removeTodo, updateTodo, toggleCompleted } from '../store/slice/todoSlice';
const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const [todoMsg, setTodoMsg] = useState(todo.todo);
  const [isToEditable, setIsToEditable] = useState(false)
  const inputRef = useRef(null);
  const editTodo = () => {
    dispatch(updateTodo(todo.id, { ...todo, todo: todoMsg }))
    setIsToEditable(false);
  }
  return (
    <div className={`flex items-center h-11 ${(todo.completed ? 'bg-[#c6e9a7]' : 'bg-[#ccbed7]')} gap-x-3 px-3 text-black rounded-lg`}>
      <input
        type="checkbox"
        className='cursor-pointer'
        checked={todo.completed}
        onChange={() => dispatch(toggleCompleted(todo.id))}
      />
      <input
        type="text"
        className={`border border-transparent bg-transparent ${(todo.completed ? 'line-through' : '')} w-full outline-none ${isToEditable ? 'border-black/10 px-2' : 'border'}`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isToEditable}
        ref={inputRef}
      />
      <button
        className='bg-white rounded-lg h-8 w-9 disabled:opacity-50'
        disabled={todo.completed}
        onClick={() => {
          if (todo.completed) return
          if (isToEditable) {
            editTodo();
          } else {
            setIsToEditable((prev) => !prev)
            inputRef.current.focus();
          }
        }}
      >
        {isToEditable ? '📁' : '✏️'}
      </button>
      <button onClick={() => dispatch(removeTodo(todo.id))} className='bg-white rounded-lg h-8 w-9'>❌</button>
    </div>
  )
}

export default TodoItem
