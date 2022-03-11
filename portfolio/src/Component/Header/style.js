import styled from "styled-components";
import { ReactComponent as facebook } from "../../img/svg/faceboook.svg";
import { ReactComponent as insta } from "../../img/svg/instagram.svg";
import { ReactComponent as twit } from "../../img/svg/twiter.svg";
import { ReactComponent as search } from "../../img/svg/search.svg";
import { ReactComponent as google } from "../../img/svg/google.svg";
import { ReactComponent as git } from "../../img/svg/git.svg";
import { ReactComponent as telegram } from "../../img/svg/telegram.svg";
export const Container = styled.div`
  width: 100%;
  @media  (max-width: 767px) {}
`
export const Table = styled.div`
  width: 100%;
  display: flex;
@media  (max-width: 1100px) {
  justify-content: center;
  align-items: center;
  h1{text-align: center;}
  div{ text-align: center}
  }
  .h{color: white}
  @media  (max-width: 767px) {
  /* .text{color: #dc3545} */
  flex-direction: column-reverse;
  div{
  margin: 0;
}
}
`
export const Wrapper = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  justify-content: ${({ right }) => right && 'center'};
  align-items: ${({ right }) => right && 'center'};
  height: 540px;
  margin-left: 7%;
@media  (max-width: 1100px) {
  width: ${({ right }) => right && '0px'};
  display: ${({ right }) => right && 'none'};
  width: 100%;
  margin: 20px;
  justify-content: center;
  align-items: center;
}
@media  (max-width: 700px) {
  justify-content: center;
  align-items: center;
  margin: 10px;
  text-align: center;
.user{
  width: 100%;
  height: 50vh;
}
}
`
export const Text = styled.div`
  margin-top: 10%;
  color: white;
  line-height: 40px;
  font-family: 'Anton', sans-serif;
div{color: grey;}
@media  (max-width: 700px) {
h1{
  font-size: 30px;
}}
`
export const Inputs = styled.div`
  display: flex;
  width: 60%;
  height: 64px;
  padding: 0 10px;
  align-items: center;
  margin-top: 60px;
  border-radius: 15px;
  color: white;
  background: rgba(255,255,255,0.05);
button{
  width: 158px;
  height: 48px;
  color: white;
  font-size: 18px;
  background: #FF6E30;
  border-radius: 8px;
  border: none;
  transition: all .3s;
  border: 1px solid #FF6E30;
}
button:hover{
  color: #FF6E30;
  background: transparent;
}
input{
  width: 100%;
  margin: 0 5px;
  font-size: 20px;
  height: 30px;
  background: transparent;
  border: none;
  color: wheat;
}
@media  (max-width: 1100px) {width: 80%;}
`
export const Face = styled(facebook)`
  width: 30px;
  height: 30px;
  margin: 20px;
  fill: white;
  stroke: white;
  transition: all .3s;
:hover{
  fill: #FF6E30;
  stroke: #FF6E30;
}
`
export const Insta = styled(insta)`
  width: 30px;
  height: 30px;
  margin: 20px;
  fill: white;
  stroke: white;
  transition: all .3s;
:hover{
  fill: #FF6E30;
  stroke: #FF6E30;
}
`
export const Twiter = styled(twit)`
  width: 30px;
  height: 30px;
  margin: 20px;
  fill: white;
  stroke: white;
  transition: all .3s;
:hover{
  fill: #FF6E30;
  stroke: #FF6E30;
}
`
export const Google = styled(google)`
  width: 30px;
  height: 30px;
  margin: 20px;
  fill: white;
  stroke: white;
  transition: all .3s;
:hover{
  fill: #FF6E30;
  stroke: #FF6E30;
}
`
export const Git = styled(git)`
  width: 30px;
  height: 30px;
  margin: 20px;
  fill: white;
  stroke: white;
  transition: all .3s;
:hover{
  fill: #FF6E30;
  stroke: #FF6E30;
}
`
export const Telegram = styled(telegram)`
  width: 30px;
  height: 30px;
  margin: 20px;
  fill: white;
  stroke: white;
  transition: all .3s;
:hover{
  fill: #FF6E30;
  stroke: #FF6E30;
}
`
export const Search = styled(search)`
  width: 50px;
  height: 60px;
  stroke: white;
`