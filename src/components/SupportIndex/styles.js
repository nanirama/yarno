import styled from "styled-components"
import { sm, md, lg, xl } from "../../utils/breakpoints"

export const Section = styled.div`
margin-bottom:50px;
@media ${md} {
  padding:0px 2.5rem;
}
`
export const ContentBlock = styled.div`
position:relative;
padding:20px 0 0 15px;
&:before{
  content:'';
  position:absolute;
  top:0;
  left:-2px;
  width:280px;
  height:2px;
  background: linear-gradient(90deg, #25C1A9 8.03%, rgba(37, 193, 169, 0) 91.16%);
  @media ${sm} {
    width:445px;
  }
}
&:after{
  content:'';
  position:absolute;
  top:207px;
  left:-209px;
  width:415px;
  height:2px;
  background: linear-gradient(90deg, #25C1A9 8.03%, rgba(37, 193, 169, 0) 91.16%);
  transform: rotate(90deg);
  
}
`
export const Grid = styled.div`
display: grid;
grid-template-columns:1fr; 
grid-gap:15px;
@media ${md} {
  grid-template-columns: 3fr 9fr;
}
`
export const GridInner = styled.div`
display: grid;
grid-template-columns:1fr;
grid-gap:15px;
align-items:start;
@media ${sm} {
  grid-template-columns:repeat(2, 1fr);
}
@media ${md} {
  grid-template-columns: repeat(3, 1fr);
}
`
export const Title = styled.div`
font-weight: 700;
font-size: 25px;
line-height: 38px;
color: #25C1A9;
margin:10px 0;
`
export const Text = styled.div`
font-weight: 300;
font-family: 'Open Sans';
font-size: 15px;
line-height: 22px;
color: #4a4a4a;
margin-bottom:15px;
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
`;