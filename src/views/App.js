import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './Home/Home'
import { NewTask } from './Task/NewTask'
import { EditTask } from './Task/EditTask'
import { ErrorState } from './Screens'

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<NewTask />} />
          <Route path="/edit/:id" element={<EditTask />} />
          <Route path="*" element={<ErrorState />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  )
}

export { App }
