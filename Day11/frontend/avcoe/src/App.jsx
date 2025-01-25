import React from 'react'
import './style.css'
import img from './ashok.jpg';

import i2 from './img.jpg';

function App() {
  return (
    <>
    <h1>Hello world</h1>
    <h1>saloni here ..!</h1>
    <div className="box" ></div>
      <div className='box1'></div>
      <div className='box2' ><img src={img} height='200px' width='200px' margin-left='400px' /></div>
      <div className='box3'></div>

      
      <img src={i2} height='300px' width='400px' />
    </>
  )
}

export default App