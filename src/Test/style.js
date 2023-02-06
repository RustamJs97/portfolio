import styled from "styled-components";
export const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
background-color: #fff;
hr{
  margin:40px 0 20px 0;
}
`
export const Wrapper = styled.div`
width: ${({ border }) => border ? '840px' : "800"};
height: ${({ border }) => border ? '840px' : "800"};
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 30px;
background-color: #000;
background: #000;
background: ${({ border }) => border && `
 linear-gradient(13deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8651632528011204) 57%, rgba(0,0,0,0.7) 75%, rgba(255,255,255,0.1) 100%);`};
/* box-shadow: ${({ border }) => border && ' 0 0 20px rgba(245, 226, 39, 0.3)'}; */
border-radius: ${({ border }) => border && '14px'};
/* box-shadow: ${({ border }) => border && 'inset -30px 30px  15px rgba(255,255,255,.05),inset -50px 50px  25px rgba(255,255,255,.05)'}; */
/* box-shadow: ${({ border }) => border && '1px 1px  10px rgba(255,255,255,.2)'}; */
/* background: ${({ border }) => border && `url(https://www.reviewofreligions.org/wp-content/uploads/2021/01/shutterstock_1551061043-scaled.jpg)`}; */
/* background:${({ border }) => border ? `linear-gradient(
  to bottom,
    rgba(0,0,0, .72 ),
    rgba(0,0,0, .85)
    ),url(https://modo3.com/thumbs/fit630x300/5931/1667224487/%D8%AA%D8%B9%D8%A8%D9%8A%D8%B1_%D8%B9%D9%86_%D8%A7%D9%84%D8%B5%D8%AF%D9%8A%D9%82.jpg)`: '#000'} ;
    
background-repeat: no-repeat;
background-position:  center;
background-size: cover; */
/* padding: ${({ border }) => !border && '30px'}; */
border: ${({ border }) => border && '2px solid #ffd859'};
/* border-radius: ${({ border }) => border && '30px'}; */
/* box-shadow: ${({ border }) => border && 'inset 10px 10px  30px rgba(0,0,0,.99),10px 10px  10px rgba(255,255,255,.1)'}; */
.span{
text-align:center;
/* font-family: 'Noto Sans Arabic', sans-serif; */
color: #fff;
font-size: 35px;
/* padding: 30px; */
}
span{
  backdrop-filter: blur(3px);
  text-shadow: 0 0 2px #000;
  font-weight:500;
  text-align:center;
  color: #fff;
  line-height:50px;
  font-size: 35px;
  /* padding: 30px; */
/* font-family: 'Montserrat', sans-serif; */
}
.sp{
text-align:center;
color: #ffd859;
font-size: 40px;
padding:0 30px;
line-height:80px
}
input{
  width: 100%;
  height: 40px;
  font-size:30px;
  color: black
}
`