import React from 'react';

const Todo = ({description, text, done, onChangeTodo, index, viewIndex, item}) => {

  return (
    <div className='mb-2 mr-2 text-right' onClick={() => {onChangeTodo(index)}}>
        <div className={
            done ? "w-32 h-32 flex justify-between item-centermb-0 bg-green-100 text-black"
            : "w-32 h-32 flex justify-between item-center mb-0 bg-red-100 text-black"
        }>
            <div className='w-full mt-8'>
            <p className='text-l font-bold mb-1 tracking-wide'>{description}</p>
            <strong className='text-lg font-normal mb-1 tracking-wide'>{text} g</strong>
            </div>
        </div>
    </div>
  )
}

export default Todo