import React from 'react'
import './header.css'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()

  return (
    <header>
      <a href="#" className='sign' onClick={() => { navigate('/') }}>GudWud Interio</a>
    </header>
  )
}

export default Header;