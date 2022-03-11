import React from 'react'
import { Container, Inputs } from './style'
import Zoom from 'react-reveal/Zoom';
const End = () => {
  return (
    <Container>
      <div>
        <Zoom effect="fadeInUp">
          <h1>Mahammadqulov Rustam</h1>
          <h5>hozirda reactJs ni ustoz Fozilxon Buzrukxojayevdan o'rganib kelmoqdaman.
          </h5>
        </Zoom>
      </div>
      <Inputs>
        <input className='inp' type="text" placeholder='enter your email' />
        <button>Qo'shiling</button>
      </Inputs>
    </Container>
  )
}

export default End
