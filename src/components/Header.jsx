import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='container'>
        <div className='text'>
            <h2>Creavtive Services</h2>
            <h2 id='text-color'>Shrinidhi Designs</h2>
        </div>
        <div className='social'>
           <img src="imgs/instagram.png" alt="" />
           <img src="imgs/pinterest.png" alt="" />
        </div>
    </div>
  )
}

export default Header