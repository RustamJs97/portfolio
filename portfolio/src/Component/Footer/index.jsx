import React from 'react'
import { Container, Wrapper } from './style'
import Slide from 'react-reveal/Slide';
const Footer = () => {
  return (
    <Container >
      <div className='row'>
        <Wrapper className=' col-md-3 col-sm-6 col-12'>
          <Slide left>
            <h1>Muallif: Antool</h1>
            <h5>Antool_Figma - bu pullik yoki bepul</h5>
            <h5> dizayn va ishlab chiqish vositalari</h5>
            <h5> haqidagi ma'lumotlarning to'plami</h5>
          </Slide >
        </Wrapper>

        <Wrapper className=' col-md-3 col-sm-6 col-12'>
          <Slide left>
            <h1>Email</h1>
            <h5>Email: rustamReactJs@gmail.com</h5>
            <h5>Github: https://gitlab.com/Muhammad</h5>
            <h5>Facebook: rustamFacebook@gmail.com</h5>
            <h5>Telegram: @programer_001</h5>
          </Slide >
        </Wrapper>

        <Wrapper className=' col-md-3 col-sm-6 col-12'>
          <Slide right>
            <h1>Conatct</h1>
            <a className='h' href="tel:+998990035430"><h5>+998 99 003 54 30</h5></a>
            <a className='h' href="tel:+998977630774"><h5>+998 97 763 07 74</h5></a>
          </Slide >
        </Wrapper>

        <Wrapper className=' col-md-3 col-sm-6 col-12'>
          <Slide right>
            <h1>Info</h1>
            <h5>about: portfilio contacts</h5>
            <h5>about: sites code git-hub</h5>
            <h5>help: users admin</h5>
            <h5>blog</h5>
          </Slide >
        </Wrapper>

      </div>
    </Container >
  )
}

export default Footer
