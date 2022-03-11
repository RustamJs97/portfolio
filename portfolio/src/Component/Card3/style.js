import styled from "styled-components";
import { ReactComponent as love } from "../../img/svg/he.svg";
import { ReactComponent as file } from "../../img/svg/email.svg";

export const Container = styled.div`
  display: flex;
  width: 100%;
button{
  width: 70px;
  height: 28px;
  background: rgba(255,255,255,0.02);
  border-radius: 4px;
  border: none;
  color: white;
  transition: all .3s;
  margin: 40px 10px 0 50px;

}
h1{
  color: white;
  margin: 10px 0 0 30px;
  font-family: 'Anton', sans-serif;

}
h5{
  color: grey;
  font-size: 20px;
  line-height: 40px;
  margin: 0 0 0 30px;
}
button:hover{
  background: #FF6E30;
}
.cardi{
width: 50%;

 }
@media  (max-width: 1000px) {
flex-direction: column;
.cardi{
width: 100%;
 }
}
@media  (max-width: 767px) {
  padding: 0;
justify-content: center;
align-items: center;
text-align: center;
}
  .img{
    width: 50px;
    height: 50px;
  }
  .button{
  width: 158px;
  height: 48px;
  color: white;
  font-size: 18px;
  background: #FF6E30;
  border-radius: 8px;
  border: none;
  transition: all .3s;
  border: 1px solid #FF6E30;
  margin: 40px 25px 10px;

}
.button:hover{
  color: #FF6E30;
  background: transparent;
}
`

export const Wrapper = styled.div`
  flex-direction: column;
 `

export const Card = styled.div`
  flex-direction: column;
  display: flex;
  padding: 8px;
  margin: 10px;
  width: 280px;
  height: 200px;
  border-radius: 5px;
  background: transparent;
  transition: all .3s;
  :hover{
  background: rgba(155,155,255,0.04);
}
@media  (max-width: 1000px) {width: 100%;   background: rgba(155,155,255,0.04); }
`
Wrapper.Card = styled.div`
  display: flex;
`
Card.Title = styled.div`
  color: white;
  margin: 5px 0 0 10px;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;

`
Card.Deck = styled.div`
  color: #FFA537;
  margin-left: 10px;
  font-weight: 500;
  font-size: 10px;
  line-height: 16px;
`
Card.Text = styled.div`
  color: grey;
  margin-top: 5px;
  font-weight: 500;
  font-size: 10px;
  line-height: 20px;
`
export const Love = styled(love)`
  width: 25px;
  height: 25px;
  margin: 40px 5px  0 0 ;
`
export const File = styled(file)`
  width: 25px;
  height: 25px;
  margin: 40px 5px  0 0 ;
`