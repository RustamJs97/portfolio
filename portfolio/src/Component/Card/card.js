import React, { useState } from 'react'
import { Wrapper, Card, Love, File, Butn } from './style'
import Flip from 'react-reveal/Flip';


const Cards = ({ v }) => {
  const [click, setClick] = useState(false)
  const [clic, setClic] = useState(false)

  return (
    <div left className="row m-auto  justify-content-center col-md-6 col-lg-4 ">
      <Card >
        <Flip>
          <div className='c'>
            <Wrapper.Card>
              <img className='img' src={v.img} alt="" />
              <div>
                <Card.Title>{v.name}</Card.Title>
                <Card.Deck>{v.deck}</Card.Deck>
              </div>
            </Wrapper.Card>
            <Card.Text>{v.texti}</Card.Text>
            <Wrapper.Card>
              <Love onClick={() => setClick(!click)} style={click ? { fill: 'red' } : { stroke: 'transparent' }} />
              <File onClick={() => setClic(!clic)} style={clic ? { fill: '#32a846' } : { stroke: 'transparent' }} />
              <Butn>ba'tafsil</Butn> </Wrapper.Card>
          </div >
        </Flip>
      </Card >
    </div>

  )
}

export default Cards
