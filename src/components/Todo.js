import React from 'react';

const Todo = ({description, text, website, done, onChangeTodo, index}) => {

  return (
    <div className=''>
        <div className={
            done ? "flex justify-between item-center p-4 mb-0 bg-green-50 text-black border-l-4 border-green-900"
            : "flex justify-between item-center p-4 mb-0 text-black border-l-4 border-gray-100"
        }>
            <div className='w-4/5'>
                
            
            <p className='text-lg font-bold mb-1 tracking-wide'>{text} g</p>
            <strong className='text-lg font-normal mb-1 tracking-wide'>{description}</strong>

            <div className='mt-2'>
            {website != null ? <a href={website} target="_blank" className="underline underline-offset-1 font-semibold">Mehr Informationen</a> : null}
            </div> </div>
            {done ? <button className="text-l font-semibold bg-green-50 p-3 text-black underline  underline-offset-2 h-16" onClick={() => {onChangeTodo(index)}}>X</button> : <button className="text-l font-semibold bg-gray-100 p-3 text-black underline underline-offset-2 h-16" onClick={() => {onChangeTodo(index)}}>Erledigt</button> }
        </div>
    </div>
  )
}

export default Todo