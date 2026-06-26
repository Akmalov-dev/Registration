import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import cof from '../src/images/cod1.jpg'

function App() {

  return (
    <>
      <img className='cod' src={cof} alt="" />
      <div className='boss'>
        <div className='inputs'>
          <input type="text" placeholder='Name' />
          <input type="text" placeholder='Email'/>
          <input type="text" placeholder='Password'/>
          <input type="text" placeholder='Phone'/>
          <button>Submit</button>
        </div>
      </div>
    </>
  )
}

export default App
