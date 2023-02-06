import React from 'react'
import { Container, Wrapper } from './style'
import { text } from './text'

const Test = () => {
  return (
    <Container>
      <Wrapper>
        <Wrapper border='true'>
          <span className='span'>
            {/* {text.ibrohim34.arab} */}
            {/* ali roziyallohu anhu shunday deydilar */}

          </span>

          {/* {text.ibrohim34.sura} */}
          {/* salovat */}
          <span className="sp">
            agar ayolin seni eri bo'lganin uchun hurmat qilsa demak uning erisan
            {/* {text.ibrohim34.uzb} */}
            {/* ey rustam dunyoga keliboq nega bunchalar g'amga to'lib yig'lading deb so'rang, men aytay: dunyoga kelib habibimiz muhammad s.a.vni topa olmaganim uchun ularni qumsab yig'ladim deb java */}
          </span>
          {/* <span >@reacthok</span> */}
          <span className="sp">
            agarda ayolin seni erkakligin uchun hurmat qilsa demak sen haqiqiy erkaksan
          </span>
          <span style={{ marginTop: '40px' }} className="sp">
            <b >MuhammadRustam</b>
          </span>
        </Wrapper>
      </Wrapper>
    </Container>
  )
}

export default Test