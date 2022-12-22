import React from 'react';

const Todo = ({description, text, done, onChangeTodo, index}) => {

  return (
    <div className={text <= 0 ? "hidden" : "mb-2 mr-2"} onClick={() => {onChangeTodo(index)}}>
        <div className={"w-full h-12 mb-0 bg-light text-black cursor-pointer"}>
          <div className='flex flex-row'>
            <div className='bg-light w-12 p-3 border-r-2 border-white'>
             <svg className={done ? "hidden" : "h-6 w-6 "} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M384 32C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H384zM384 80H64C55.16 80 48 87.16 48 96V416C48 424.8 55.16 432 64 432H384C392.8 432 400 424.8 400 416V96C400 87.16 392.8 80 384 80z"/></svg>
             <svg className={done ? "h-6 w-6 ": "hidden"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M211.8 339.8C200.9 350.7 183.1 350.7 172.2 339.8L108.2 275.8C97.27 264.9 97.27 247.1 108.2 236.2C119.1 225.3 136.9 225.3 147.8 236.2L192 280.4L300.2 172.2C311.1 161.3 328.9 161.3 339.8 172.2C350.7 183.1 350.7 200.9 339.8 211.8L211.8 339.8zM0 96C0 60.65 28.65 32 64 32H384C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96zM48 96V416C48 424.8 55.16 432 64 432H384C392.8 432 400 424.8 400 416V96C400 87.16 392.8 80 384 80H64C55.16 80 48 87.16 48 96z"/></svg>
            </div>
            <div className='w-full'>
              <p className='text-l font-bold mb-1 mt-2 ml-2 tracking-wide'>{description}: <strong className='text-lg font-normal mb-1 tracking-wide'>{text} g</strong></p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Todo
