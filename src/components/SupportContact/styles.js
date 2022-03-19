import styled from "styled-components"
import { sm, md, lg, xl } from "../../utils/breakpoints"

import bg2 from "../../images/support/bg2.png"

export const Contact = styled.div`
padding:50px 2rem 100px 2rem;
background-color:#EFEFEF;
background-image:url(${bg2});
background-position:bottom -1px left;
background-repeat:no-repeat;
background-size:100%;
`
export const ContactInner = styled.div`
display:flex;
justify-content:space-evenly;
align-items: center;
flex-direction:column;
@media ${md} {
  flex-direction:row;
}
p{
  color: #4A4A4A;
  font-weight: 600;
  font-size: 16px;
  line-height: 32px;
  svg{
    width:30px;
  }
 @media ${sm} {
  font-size: 22px;
  line-height: 42px;
  svg{
    width:45px;
  }
  }
}
`
export const ChatButton = styled.div`
display: flex;
justify-content: center;
a{
  background-color: #25C1A9;
  color:#fff;
  text-transform:uppercase;
  font-weight: 800;
  align-items: center;
  font-size: 16px;
  border-radius: 7px;
  line-height: 22px;
  font-family: Raleway;
  text-decoration:none;
  padding:15px 20px;
  display: flex;
  svg{
    margin-left:10px;
  }
}
`