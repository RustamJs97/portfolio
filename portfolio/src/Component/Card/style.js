import styled from "styled-components";

import { ReactComponent as love } from "../../img/svg/he.svg";
import { ReactComponent as file } from "../../img/svg/like.svg";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-direction: column;
  align-items: center;
  padding: 30px 10%;
  width: 100%;
h1{
  color: white;
  margin: 20px 0;
  font-size: 48px;
  font-family: 'Anton', sans-serif;
}

@media  (max-width: 7670px) {
    padding: 0;
h1{
    font-size: 30px;
}
}
`
export const Butn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 118px;
  height: 48px;
  background: rgba(255,255,255,0.02);
  border-radius: 8px;
  color: white;
  transition: all .3s;
  margin: 40px 0 0 100px;
:hover{
  background: #FF6E30;
}

@media  (max-width: 1300px) {
    width: 100px ;
    height: 40px ;
    font-size: 12px ;
    margin: 25px 0 0 100px ;
    border-radius: 5px ;
}
@media  (max-width: 1170px) {
    width: 80px ;
    height: 30px ;
    font-size: 12px ;
    margin: 8px 0 0 100px ;
    border-radius: 5px ;
}
@media  (max-width: 767px) {
  width: 118px;
  height: 48px;
  border-radius: 8px;
  margin: 40px 0 0 100px;

}
`
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
 `
export const Card = styled.div`
  transition: all .3s;
  display: flex;
  padding: 25px 35px;
  flex-direction: column;
  width: 392px;
  height: 294px;
  border-radius: 15px;
  :hover{
  background: rgba(155,155,255,0.04);
}
@media  (max-width: 1300px) {
    width: 340px; 
    height: 250px;
    padding: 15px 20px;
}
@media  (max-width: 767px) {
    width: 100%; 
    padding: 25px 35px;
    flex-direction: column;
    height: 294px;
    border-radius: 15px;
    margin: 10px;
    background: rgba(155,155,255,0.04);
}
 `
Wrapper.Card = styled.div`
  display: flex;
`
Card.Title = styled.div`
  color: white;
  margin: 5px 0 0 20px;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;

`
Card.Deck = styled.div`
  color: #FFA537;
  margin-left: 20px;
  font-weight: 500;
  font-size: 18px;
  line-height: 36px;
`
Card.Text = styled.div`
  color: grey;
  margin-top: 30px;

  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
`
export const Love = styled(love)`
  width: 30px;
  height: 30px;
  margin-top: 50px;
@media  (max-width: 1300px) {margin-top: 30px;}
@media  (max-width: 1170px) {margin-top: 10px;}
@media  (max-width: 767px) {margin: 50px 0 0 30px;}
`
export const File = styled(file)`
  width: 30px;
  height: 30px;
  margin: 50px 0 0 30px;
@media  (max-width: 1300px) {margin-top: 30px;}
@media  (max-width: 1170px) {margin-top: 10px;}
@media  (max-width: 767px) {margin: 50px 0 0 30px;}
`
export const Read = styled.div`
  display: flex;
  margin-top: 80px;
  width: 184px;
  height: 64px;
  font-size: 20px;
  color: #FF6E30;
  border: 1px solid rgba(255,255,255,0.05);
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  transition: all 0.3s;
cursor: pointer;
:hover{
    background: #FF6E30;
    color: white;
  }
 `


