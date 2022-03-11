import styled from "styled-components";


export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
padding: 10% 0;
div{
width: 40%;

}
h1{
  color: white;
  margin-bottom: 25px;
  font-size: 48px;
  text-align: center;
  font-family: 'Anton', sans-serif;

}
h5{
  color: silver;
  line-height: 30px;
  font-size: 18px;
  text-align: center;
}
@media  (max-width: 1280px) {
  div{
    width: 60%;
    
  }
  h1{
    font-size: 40px;
  }
  h5{
    text-align: center;
    font-size: 16px;
  }
}
@media  (max-width: 900px) {
div{width: 80%;
}
@media  (max-width: 700px) {
h1{
  font-size: 30px;
}
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
  @media  (max-width: 1080px) {
    width: 35%;
  }
  @media  (max-width: 700px) {
  width: 90%;
}
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

`