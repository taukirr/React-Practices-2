import React from 'react'

export default function Lap({laps}) {

  const calculateTimediff = (str1, str2) => {
    const time1 = new Date(`1970-01-01T${str1}Z`)
    const time2 = new Date(`1970-01-01T${str2}Z`)
    const timeDiff = Math.abs(time1 - time2)
    const hours = Math.floor(timeDiff/3600000).toString().padStart(2, '0')
    const minutes = Math.floor((timeDiff % 3600000) / 6000).toString().padStart(2, '0')
    const second = Math.floor((timeDiff % 60000) / 1000).toString().padStart(2, '0')
    const miliSecond = ((timeDiff % 1000) / 10).toString().padStart(2, '0')
    const result = `${hours}:${minutes}:${second}.${miliSecond}`
    return result
  }
  
  return (
    <div className='mt-10' style={{display: (laps.length) ? 'block' : `none` }}>
      <h3 className='text-xl flex justify-center items-center text-left m-2'>
      <span className='m-2'>Lap</span>
      <span className='m-2'>Time</span>
      <span className='m-2'>Total Time</span>
      </h3>
      <ul className='list-none p-0'>
        {laps.map((pervLaps, i) => 
        <li className='flex justify-between items-center mr-[5px] mb-1 ml-[5px]' key={i}>
          <span>{`Lap ${i + 1}`}</span>
          <span>{calculateTimediff(pervLaps, i !== 0 ? laps[i - 1] : "00:00:00.00")}</span>
          <span>{pervLaps}</span>
        </li>
        )}
      </ul>
    </div>
  )
}
