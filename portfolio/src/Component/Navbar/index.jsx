import { click } from '@testing-library/user-event/dist/click'
import React, { state, useState } from 'react'
import logo from '../../img/jpg/logo.png'
import { Container, Wrapper, Bars } from './style'
const Navbar = () => {
  const [click, setClick] = useState(false)
  return (
    <Container>

      <Wrapper style={click ? { display: 'none' } : { display: 'flex' }}>
        <img className='logo' src={logo} alt="ruby" />
        <h1>Diamond</h1>
      </Wrapper>
      <Wrapper style={click ? { display: 'flex' } : { display: 'none' }} a>
        <div className='link'>Home</div>
        <div className='link'>Categories</div>
        <div className='link'>Collections</div>
        <div className='link'>Blog</div>

      </Wrapper>
      <Wrapper b>
        <div className='link'>Home</div>
        <div className='link'>Categories</div>
        <div className='link'>Collections</div>
        <div className='link'>Blog</div>

      </Wrapper>
      <Wrapper style={click ? { display: 'none' } : { display: 'flex' }}>
        <div className='s'> <div className='link'>Login</div></div>
        <button className='link'>Sign up</button>
      </Wrapper>
      <Bars />

    </Container >
  )
}

export default Navbar
