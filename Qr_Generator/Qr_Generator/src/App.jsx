import { useEffect } from "react"
import { useState } from "react"


function App() {

  const [temp, setTemp] = useState("")
  const [word, setWord] = useState("")
  const [qrCode, setQrCode] = useState("")
  const [size, setSize] = useState(400)
  const [bgColor, setBgColor] = useState("ffffff")

  useEffect(() => {
    setQrCode(`https://api.qrserver.com/v1/create-qr-code/?data=${word}!&size=${size}x${size}&bgcolor=White`)
  },[word, size, bgColor])

  function handleClick(){
    setTemp(temp)
  }

  return (
    <>
      <div className="flex flex-col justify-between items-center gap-4 pt-8"> 
      <h1 className="font-sans text-5xl mb-5">QR Code Generator</h1> 
          <input 
            className="rounded-lg border-none h-10 w-96"
            type="text" 
            placeholder="Enter text to encode"
            onChange={ 
            (e) => {setTemp(e.target.value)}} /> 
          <button 
            className="p-1 border-none bg-blue-500 text-gray-100 rounded-xl hover:bg-blue-700 hover:text-white" 
            onClick={handleClick}> 
            Generate 
          </button> 
        <div className="pt-5 flex justify-around gap-2.5"> 
          <h5>Dimension:</h5>
          <input className="bg-blue-300 cursor-pointer"
           type="range" min="200" max="600"
           value={size} onChange={(e) =>  
           {setSize(e.target.value)}} /> 
        </div>
      <div className="flex flex-col items-center gap-5"> 
        <img src={qrCode} alt="QR" /> 
        <a href={qrCode} download="QRCode"> 
          <button
          className="bg-blue-500 text-gray-100 rounded-xl p-1 hover:bg-blue-700
           hover:text-white"
          >Download</button>
          {console.log("This is img")}
        </a> 
      </div>
    </div> 
    </>
  )
}

export default App
