import styled from "styled-components"
import { sm, md, lg, xl } from "../../utils/breakpoints"

export const SubTitle = styled.div`
font-weight: 700;
font-size: 15px;
line-height:25px;
color: #25C1A9;
margin-bottom:10px;  
& > a{
  text-decoration:none;
}
`
export const Svg = styled.div`
position:absolute;
right:0;
bottom:-1px;
`
export const ItemBox = styled.div`
display: flex;
flex-direction:column;
align-items: center;
position:relative;
justify-content: stretch;
text-align:center;
background-color: #F8F8F8;
border: 1px solid #DEDEDE;
box-sizing: border-box;
border-radius: 4px;
padding:20px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
padding-bottom:50px;
img{
  width:auto;
}
@media ${md} {
  padding-bottom:20px;
}
& > a{
  text-decoration:none;
}
`
