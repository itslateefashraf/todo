import { useState } from 'react'
import './App.css'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import CustomInput from './components/CustomInput/CustomInput';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CustomInput label="umar" type="text" placeholder="Enter you name"/>

      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows={3}></textarea>
      </div>
      
      <CustomInput label="email" type="password" placeholder="Enter you email"/>
    </>
  )
}

export default App
