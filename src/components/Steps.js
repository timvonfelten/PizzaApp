import React, { useState } from 'react';

const Steps = ({time_start, time_end, title, text, ingredient, index, viewIndex, key}) => {

  const [open, setOpen] = useState(false)

  return (
    <div key={key} className= {viewIndex == index ? 'mb-32' :'hidden'}>
        <div className="flex justify-between item-center p-4 bg-light text-black"
        onClick={() => setOpen(!open)}>
            <div className='w-full text-center'>
              <p className='text-l font-bold mb-1 tracking-wider uppercase'>{time_start} - {time_end}</p>
              <strong className='text-2xl font-bold mb-2 tracking-wider'>{title}</strong>
              <p className={ingredient == "" ? "hidden" : 'text-black pt-2 pb-2 tracking-wider'}>{ingredient}</p>
              <p className="mt-4 mb-10">{text}</p>
            </div>
        </div>
    </div>
  )
}

export default Steps