import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {LoginPage, SignUpPage} from "./Routes.js"

function App() {
  const [count, setCount] = useState(0)

  return (
   <BrowserRouter>
    <Routes>
    <Route path='/login' element={<LoginPage/>} />
    <Route path='/sign-up' element={<SignUpPage/>} />
    </Routes>
   </BrowserRouter>
  )
}

export default App
