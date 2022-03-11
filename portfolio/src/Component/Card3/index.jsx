import React, { useState } from 'react'
import { cards } from '../../mock/card3'
import { Container, Btn } from './style'
import Zoom from 'react-reveal/Zoom';
import Carda from './card'
const Cards = () => {
  const [data, setData] = useState(cards)

  return (
    <Container >
      <Zoom>
        <div className='cardi' style={{ padding: '30px' }}>
          <h1>mening portfoilolarim</h1>
          <h5>Web Code academy asoschisi ustoz Fozilxon Buzrukxojayev yordamlari asosida qilgan portfiololardan
            In Sha Allah kelajakda bu portfoilolarni to'liq bitirish niyyatlarim ham bor.      </h5>
          <h5> Portfiololarni juda
            ko'p qismi katta loyiha bo'lgani uchun hamma pagelari yakunlanmagan

          </h5>
          <button className='button'>batafsil</button>
        </div>
      </Zoom>
      <div className='cardi row '>

        {
          data.map((v) => {
            return <Carda v={v} />
          })
        }
      </div>
    </Container >
  )
}

export default Cards
