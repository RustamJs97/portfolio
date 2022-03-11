import React, { useState } from 'react'
import { datas } from '../../mock/card'
import Zoom from 'react-reveal/Zoom';

import { Container, Wrapper, Card, Read } from './style'
import Carda from './card'
import { Fade } from "react-awesome-reveal";
const Cards = () => {
  const [data, setData] = useState(datas)

  return (
    <Container >
      <Fade>
        <h1>O'rgangan texnalogiyalarim</h1>
        {/* <Card text>

          bugungi kungacha o'rgangan va o'rganishda davom etirayotgan texnalo'giyalar

        </Card> */}
      </Fade>
      <Wrapper>
        <div className='row'>

          {
            data.map((v) => {
              return <Carda v={v} />

            })
          }
        </div>
        <Fade>

          <Read> Read Mode</Read>
        </Fade>

      </Wrapper >
    </Container >
  )
}

export default Cards
