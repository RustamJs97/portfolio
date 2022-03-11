import React, { useState } from 'react'
import logo from '../img/jpg/logo.png'
import { Containers, Container, Wrapper, Bars } from './style'
import Card from '../Component/Card'
import Card2 from '../Component/Card2'
import Card3 from '../Component/Card3'
import Carousel from '../Component/Carousel'
import End from '../Component/Join'
import Header from '../Component/Header'
import Footer from '../Component/Footer'

const Wiev = () => {
  const [click, setClick] = useState('#collapse1')
  const [act, setAct] = useState(false)
  return (
    <Containers>
      <div>
        <Container>
          <Wrapper >
            <img className='logo' src={logo} alt="ruby" />
            <h1>Diamond</h1>
          </Wrapper>

          <Wrapper>
            <a href="#home">Home</a>
            <a href="#texnologiya">texnologiya</a>
            <a href="#Portfolio">Portfolio</a>
            <a href="#Brain">Brain</a>
            <a href="#About">About</a>
          </Wrapper>

          <Wrapper >
            <div className='link'>Login</div>
            <button className='link'>Sign up</button>
          </Wrapper>
          <Bars data-toggle="collapse" onClick={() => setAct(!act)} href={click} />
        </Container >
      </div>
      <div className="panel-group" >
        <div id="collapse1" class="panel-collapse collapse">
          <a className="list-group-item" href="#home">Home</a>
          <a className="list-group-item" href="#texnologiya">texnologiya</a>
          <a className="list-group-item" href="#Portfolio">Portfolio</a>
          <a className="list-group-item" href="#Brain">Brain</a>
          <a className="list-group-item" href="#About">About</a>
        </div>
      </div>
      <div id='home'><Header /></div>
      <div id='texnologiya'><Card /></div>
      <div ><Card2 /></div>
      <div id='Portfolio'><Card3 /></div>
      <div id='Brain'><Carousel /></div>
      <div id='com'><End /></div>
      <div id='About'><Footer /></div>
    </Containers>
  )
}

export default Wiev
