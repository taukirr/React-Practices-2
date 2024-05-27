import React, { useEffect, useState } from 'react'
import Lap from './Lap'

function Stopwatch() {

    const [miliSecond, setMiliSecond] = useState(0)
    const [second, setSecond] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [hours, setHours] = useState(0)
    const [laps, setLap] = useState([])
    const [isRunning, setIsRunning] = useState(false)

    const formateZero = (num) => {
        if(num < 10) return '0' + num
        else return num.toString()
    }

    useEffect(() => {
        let interval;
        if(isRunning){
            interval = setInterval(() => {
                setMiliSecond((miliSecond) => {
                    if(miliSecond >= 99){
                        setSecond((second) => {
                            if(second >= 59){
                                setMinutes((minutes) => {
                                    if(minutes >= 59){
                                        setHours((prevHour) => prevHour + 1)
                                        return 0
                                    }
                                    else{
                                        return minutes + 1
                                    }
                                })
                                return 0
                                }
                                else{
                                    return second + 1
                            }
                        })
                        return 0;
                    }
                    else{
                        return miliSecond + 1
                    }
                })
            }, 10);
        }
        return () => clearInterval(interval)
    },  [isRunning])

    const handleStart = () => {
        setIsRunning(true)
    }

    const handlePause = () => {
        setIsRunning(false)
    }
    
    const handleLap = () => {
        const laptime = formateZero(hours) + ":" + formateZero(minutes) + ":" + formateZero(second) + "." + formateZero(miliSecond)
        setLap((pervLap) => [... pervLap, laptime] )
    }

    const handleReset = () => {
        setIsRunning(false)
        setMiliSecond(0)
        setSecond(0)
        setMinutes(0)
        setHours(0)
        setLap([])
    }

  return (
    <div className='p-10 border-solid bg-[#fff] shadow-lg mx-auto w-96 box-border'>
        <div className='p-5 text-4xl border-lg rounded text-center'>
            {formateZero(hours)} : {formateZero(minutes)} : {" "} {formateZero(second)}.{formateZero(miliSecond)}
        </div>
        <div className='flex justify-center mt-5'>
            <button className='px-2 py-1 outline-none border-solid m-1 rounded cursor-pointer
             bg-[#1d9bf0] text-white text-lg transition-all duration-500 hover:bg-[#1879ba]'
             onClick={handleStart}
             disabled={isRunning}
             style={{cursor : isRunning ? "not-allowed" : "pointer"}}
             > Start
            </button>
            <button className='px-2 py-1 outline-none border-solid m-1 rounded cursor-pointer
             bg-[#1d9bf0] text-white text-lg transition-all duration-500 hover:bg-[#1879ba]'
             onClick={handlePause}
            > Pause</button>
            <button className='px-2 py-1 outline-none border-solid m-1 rounded cursor-pointer
             bg-[#1d9bf0] text-white text-lg transition-all duration-500 hover:bg-[#1879ba]'
             onClick={handleLap}
            > Lap</button>
            <button className='px-2 py-1 outline-none border-solid m-1 rounded cursor-pointer
             bg-[#1d9bf0] text-white text-lg transition-all duration-500 hover:bg-[#1879ba]'
             onClick={handleReset}
            > Reset
            </button>
        </div>
        <Lap laps={laps}/>
    </div>
  )
}

export default Stopwatch