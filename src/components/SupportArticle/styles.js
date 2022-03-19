import styled from "styled-components"
import { sm, md, lg, xl } from "../../utils/breakpoints"

export const Heading = styled.h1`
font-size:32px;
line-height:38px;
font-weight:700 !important;
margin-bottom:5px;
float:left;
display: flex;
text-align:left;
width:100% !important;
color:#333;
font-family: Raleway;

@media ${md} {
  font-size:45px;
  line-height:50px;
}
`

export const Item = styled.div`
display: flex;
flex-direction: column;
& > .Container-imqkYE{
  max-width:100% !important;
  width:100% !important;
  padding:0px !important;
}
@media only screen and (max-width:850px) {
  padding:0;
}
h3{
  width:100% !important;
  font-size:19px;
  font-weight:700; 
  line-height:25px;
  margin-bottom:40px;
  color:#25c1a9;
  @media only screen and (max-width:850px) {
    margin-bottom:20px;
    margin-top:0;
  }
}
ul{
  margin:0;
  padding:0;
  text-align: left;
}
li{
  list-style:none;
  font-weight: 500;
  font-family: Raleway;  
  font-size: 15px; 
  line-height:22px;
  color: #4A4A4A;
  margin-bottom:10px;
  a{
    text-decoration: none !important;
  }
  svg{
    margin-right:16px;
    float:left;
    height:25px;
  }
}

`
