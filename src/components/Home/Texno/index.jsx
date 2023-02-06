import React, { useState } from 'react'
import { data } from '../../../mock/portfolio'
import { Container, Card, Title, Text } from './style'
import logo from '../../../assets/img/newlogo.png'
import arrow from '../../../assets/svg/arrow.svg'
import { Line, Circle } from 'rc-progress';
const Navbar = () => {
  const [click, setClick] = useState(false)
  const handleClick = () => {
    click ? window.scrollTo(0, 600) : window.scrollTo(0, 1200)
    setClick(!click)
  }
  return (
    <Container className='container '>

      <div className="text-name">Knowledge and skills</div>


      <div className="wrapper wrap">
        {data.slice(0, click ? 15 : 6).map((v, i) =>
          <Card i={i % 2}>
            <Title> <img className='img-card' src={v.img} alt="" /> {v.type} </Title>
            <Text >{v.level} developer</Text>
            <Text desc='true'>tajribam {v.desc}</Text>
            <br />
            <Line percent={v.percent} trailWidth={2} strokeWidth={2} trailColor="rgba(255,255,255,.1)" strokeColor="#DCCA87" />
          </Card>
        )}
      </div>
      <Text.Arrow click={click} onClick={handleClick} src={arrow} alt="" />
    </Container>
  )
}

export default Navbar