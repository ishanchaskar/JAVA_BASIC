// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import EmployeeComponent from './component/EmployeeComponent'
import Footer from './component/Footer'
import Header from './component/Header'
import ListEmployeeComponent from './component/ListEmployeeComponent'
import {BrowserRouter , Routes ,Route} from 'react-router-dom'

function App() {
  return (
    <>
    <BrowserRouter>
     <Header/>
     <Routes>
      <Route path='/' element={<ListEmployeeComponent/>}></Route>
      <Route path='/employees' element={<ListEmployeeComponent/>}></Route>
      <Route path='/add-employee' element={<EmployeeComponent/>}></Route>
<Route path='/employees/edit-employee/:id' element={<EmployeeComponent />} />
     </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
