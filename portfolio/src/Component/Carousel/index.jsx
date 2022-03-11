import React from 'react'
import Carousel from 'react-elastic-carousel';
import { datas } from '../../mock/carousel';
import { Fade } from "react-awesome-reveal";
import { Container, Title, Card, Img, Text } from './style'
const CarouselApp = () => {
  return (
    <Container>
      <Carousel>
        {
          datas.map((v) => {
            return <Card key={v.id}>
              <Img>
                <Fade>
                  <img className='a' src={v.img} alt="" />
                </Fade>
              </Img>
              <Title>
                {v.title}
              </Title>
            </Card>
          })
        }
      </Carousel>

    </Container >
  )
}

export default CarouselApp
