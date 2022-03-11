import styled from "styled-components";
export const Container = styled.div`
width: 100%;
background-size: cover;
background-repeat: no-repeat;
border-top:1px solid grey ;
div{
  width: 100%;
}
a{margin: 0}
`
export const Wrapper = styled.div`
display: flex;
flex-direction: column;
padding: 50px 30px;
width: 100%;
div{
  
}
h1{
  cursor: pointer;

  color: white;
  font-size: 16px;
}
h5{
  cursor: pointer;

  color: grey;
  font-size: 14px;
}
@media  (max-width: 700px) {
  padding: 10px ;
h1,h5{
  margin-left: 25px;
}
}
h5:hover{
  color: white;
}
h1:hover{
  color: #FF6E30;
  transition: all .3s;
}
`
