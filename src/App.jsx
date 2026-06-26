import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import cof from '../src/images/cod2.jpg'

function App() {

  return (
    <>
      <img className='cod' src={cof} alt="" />
      <div className='boss'>
        <div className='inputs'>
          <input type="text" placeholder='  Name' />
          <input type="email" placeholder='  Email'/>
          <input type="password" placeholder='  Password'/>
          <input type="text" placeholder='  Phone'/>
          <button className='submit'>Press for login</button>
        </div>
      </div>
    </>
  )
}

export default App
