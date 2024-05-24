import { useEffect, useState } from 'react'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'
import { useSelector } from 'react-redux'

function App() {
  const data = useSelector((state) => state.todos.todos);
  return (

    <div className='h-screen w-100 bg-[#172842] py-8'>
      <div className='w-100 max-w-2xl shadow-sm  rounded-lg mx-auto text-white p-5'>
        <h1 className='text-center text-2xl font-bold w-100'>Manage Your Todos</h1>
        <div className='mt-5'>
          <TodoForm />
        </div>
        <div className='flex flex-col mt-5 gap-3'>
          {
            data.map((todo) => {
              return (
                < TodoItem key={todo.id} todo={todo} />
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default App
