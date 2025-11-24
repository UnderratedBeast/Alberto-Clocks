import React from 'react'
import logo from '../../assets/img/logo.png'
import './Upper.css'
const Upper = () => {
  return (
    <div className='logo-con'>
      <p className='logo-text'>
        <img src={logo} className='logo-img'/>
      </p>

    </div>
  )
}

export default Upper;
