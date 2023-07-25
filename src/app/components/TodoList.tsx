import React from 'react'

const TodoList = () => {
  return (
    <ul className='space-y-3'>
      <li className='flex'>
        <span>散歩</span>
        <div>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </li>
    </ul>
  )
}

export default TodoList