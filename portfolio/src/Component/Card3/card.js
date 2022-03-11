import React, { useState } from 'react'
import { Wrapper, Card, Love, File } from './style'
import Zoom from 'react-reveal/Zoom';
const Cards = ({ v }) => {
  const [click, setClick] = useState(false)
  const [clic, setClic] = useState(true)


  return (
    <div className="row m-auto justify-content-center col-12 col-md-6 col-6">
      <Card>
        <Zoom>
          <Wrapper.Card >
            <img className='img' src={v.img} alt="" />
            <div>
              <Card.Title>{v.name}</Card.Title>
              <a href={v.deck}><Card.Deck>{v.deck}</Card.Deck></a>

            </div>
          </Wrapper.Card>
          <Card.Text>{v.texti}</Card.Text>


          <Wrapper.Card>
            <Love onClick={() => setClick(!click)} style={click ? { fill: 'red' } : { stroke: 'transparent' }} />
            <File onClick={() => setClic(!clic)} />

            <button>ba'tafsil</button>
          </Wrapper.Card>
          <h2 style={clic ? { display: 'none' } : { color: 'white', fontSize: '12px', marginTop: '5px' }}><a href={v.deck}>{v.deck}</a></h2>
        </Zoom>
      </Card>
    </div >
  )
}

export default Cards
