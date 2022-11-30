import React, { useState } from 'react';

const Steps = ({time_start, time_end, title, text}) => {

  const [open, setOpen] = useState(false)


  return (
    <div className='cursor-pointer'>
        <div className={
            open ? "flex justify-between item-center p-4 mb-0 bg-light text-black border-l-4 border-green-900"
            : "flex justify-between item-center p-4 mb-0 text-black border-l-4 border-gray-100"
        }
        onClick={() => setOpen(!open)}>
          
            <div className='w-full text-center'>
            
            <p className='text-l font-bold mb-1 tracking-wider uppercase'>{time_start} - {time_end}</p>
            <strong className='text-lg font-bold mb-1 tracking-wider'>{title}</strong>
            <p className={open ? "visible" : "hidden"}>{text}</p>
            <p className={open ? "visible text-grey" : "hidden text-grey"}>- Rezept verbergen</p>
            <p className={open ? "hidden text-grey" : "visible text-grey"}>+ Rezept anzeigen</p>

            </div>
        </div>
    </div>
  )
}

export default Steps