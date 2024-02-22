import { useState } from 'react'
import ButtonExample from './examples/Button.example';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='container w-full h-full flex p-20'>

      <BrowserRouter>
        <Routes>
          <Route path="/button" element={<ButtonExample />} />
        </Routes>
      </BrowserRouter>
      
       
    </div>
  )
}

export default App
