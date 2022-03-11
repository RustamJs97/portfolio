import styled from "styled-components";
import { ReactComponent as bars } from '../../img/svg/bars.svg'
export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  padding: 0;
  justify-content: space-around;
@media  (max-width: 767px) {
  justify-content: space-between;
  padding: 0 10px;
h1{font-size: 25px;}
}
`
export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex: ${({ a }) => (a ? '2' : '1')};
  display: ${({ a }) => (a && 'none ')};
  width: 100%;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 22px;
.logo{
  width: 80px;
  height: 50px;
}
.link{
  margin: 0PX 5%;
  text-align: center;
  color: white;
  font-size: 16px;
  cursor: pointer;
}
.link:hover{color: silver;}
button{
  width: 118px;
  height: 48px;
  color: #FF6E30 !important;
  border-radius: 8px;
  background: transparent;
  transition: all .3s;
  border: 1px solid #FF6E30;
}
button:hover{
  background: #FF6E30;
  color: white !important;
}
h1{
  font-size: 22px;
  cursor: pointer;
  font-family: 'Anton', sans-serif;
}
h1:hover{color: #D2042D;}
@media  (max-width: 767px) {
  flex: ${({ a }) => (a & '1')};
  display: ${({ b }) => (b && 'none')};
button{display: none;}
.s{display: none;}
}
`
export const Bars = styled(bars)`
  width: 30px;
  height: 30px;
  float: right;
  margin: 30px 0 0 5px;
  fill: white;
  stroke: white;
  display: none;
@media  (max-width: 767px) {display: flex}
`