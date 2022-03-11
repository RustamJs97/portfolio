import React from 'react'
import wc from '../../img/jpg/wc.jpg'
import pdp from '../../img/jpg/pdp.jpg'
import web from '../../img/jpg/web.jpg'
import Flash from 'react-reveal/Flash';
import { Container, Contain, Card } from './style'
const Card2 = () => {
  return (
    <Container>
      <Contain>
        <h4 style={{ color: 'grey' }}>ta'lim olgan academiyalarim</h4>
        <Card>
          <Flash>
            <Card.Wrapper>
              {/* <img className='img' src={pdp} alt="" /> */}
              <div>
                <h1>Web Code</h1>
                {/* <h2>Academy</h2> */}

              </div>
            </Card.Wrapper>
          </Flash>
          <Flash>

            <Card.Wrapper>
              {/* <img className='img' src={wc} alt="" /> */}
              <div>
                <h1>PDP</h1>
                {/* <h2>Academy</h2> */}

              </div>
            </Card.Wrapper>
          </Flash>
          <Flash>

            <Card.Wrapper>
              {/* <img className='img' src={web} alt="" /> */}
              <div>
                <h1>Web Brain</h1>
                {/* <h2>Academy</h2> */}

              </div>
            </Card.Wrapper>
          </Flash>

        </Card>
      </Contain>
    </Container>
  )
}

export default Card2
