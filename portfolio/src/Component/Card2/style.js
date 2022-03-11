import styled from "styled-components";
export const Container = styled.div`
display: flex;
width: 100%;
.img{
  width: 150px;
  height: 150px;
  border-radius: 20px;
  margin-right: 20px;
  transition: all .3s;
}
.img:hover{
box-shadow: 0 0 20px -8px rgba(25,150,155,0.5);
}
h4{
  text-align: center;
  font-size: 30px;
  margin-bottom: 20px;
  color: silver;
}
@media  (max-width: 767px) {h4{font-size: 20px}}

`
export const Contain = styled.div`
display: flex;
flex-direction: column;
width: 100%;
color: white;
margin: 30px 5%;
padding: 30px;
justify-content: center;
align-items: center;
background: rgba(255,255,255,0.02);
border-radius: 25px;
border: 1px solid rgba(255,255,255,0.07);
`

export const Card = styled.div`
display: flex;
width: 100%;
align-items: center;
justify-content: space-around;
@media  (max-width: 767px) {
  flex-direction: column;
}
`
Card.Wrapper = styled.div`
display: flex;
align-items: center;
h1{
  font-size: 45px;
  color: rgba(255,255,255,0.5);
  font-family: 'Anton', sans-serif;
}
@media  (max-width: 1200px) {
  flex-direction: column;
}
@media  (max-width: 767px) {
  flex-direction: row;
  margin: 10px;
h2{
  font-size: 20px;
  margin-left: 30px;
  }
}
`
