import React from 'react'
import Navbar from '../Navbar'
import user from '../../img/jpg/mac.png'
import Bounce from 'react-reveal/Bounce';
import { Fade } from "react-awesome-reveal";

import { Container, Table, Wrapper, Inputs, Text, Face, Insta, Twiter, Search, Google, Git, Telegram } from './style'
const Header = () => {
  return (
    <Container>
      <Table>

        <Wrapper>
          <Bounce left>
            <Text>
              <h1 className='text'>Web Brain academy</h1>
              <h1 className='text'>online & ofline kurslar</h1>
              <div>
                WebBrain dan endilikda korea va hindistonda talim olgan o'qtuvchilardan online va ofline o'quv kurslari mavjud
                Frontend, backend, mobile dastur un sifatli darsliklar mavjud telegram: <a className='h' href="https://t.me/webbrain_academy">t.me/webbrain_academy</a> ,  aloqa: <a className='h' href="tel:+998977630774">+998977630774</a>
              </div>

            </Text>
          </Bounce>

          <Inputs>
            <Search />
            <input className='inp' type="search" placeholder='WebCode accedmy' />
            <button>Search</button>
          </Inputs>
          <div className='icon'>
            <a href="https://t.me/webbrain_academy">
              <Google />
            </a>
            <a href="https://t.me/webbrain_academy">
              <Face />
            </a>
            <a href="http://instagram.com/web_code_academy_official">
              <Insta />
            </a>
            <a href="https://t.me/webbrain_academy">
              <Git />
            </a>
            <a href="https://t.me/webbrain_academy">
              <Twiter />
            </a>
            <a href="https://t.me/webbrain_academy">
              <Telegram />
            </a>
          </div>
        </Wrapper>
        <Wrapper right>
          <Bounce right>
            <img className='user' src={user} alt="user" />
          </Bounce>
        </Wrapper>

      </Table>
    </Container>
  )
}

export default Header
