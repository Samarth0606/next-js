import { useState } from 'react'
import { BrowserRouter, Routes , Route} from "react-router-dom"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/singup' element={<Singup/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
