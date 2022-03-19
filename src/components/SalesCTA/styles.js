import styled from "styled-components"
import { sm, md } from "../../utils/breakpoints"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 85rem;
  margin: 4rem auto;
  padding: 0 2rem;
  img {
      max-width: 10rem;
      max-height: 10rem;
 }
`

export const Button = styled.div`
display: flex;
justify-content: center;
a{
  background-color:#F9A21A;
  color:#fff;
  text-transform:uppercase;
  font-weight: 800;
  align-items: center;
  font-size: 16px;
  border-radius: 7px;
  line-height: 22px;
  font-family: Raleway;
  text-decoration:none;
  padding:15px 32px;
  display: flex;
  margin-top:30px;
  svg{
    margin-left:10px;
  }
}
`
export const ChatBlk = styled.div`
max-width:940px; margin:0 auto;
padding:50px 0;
h2{
  font-family: Raleway;
  font-weight: 600;
  font-size: 30px;
  line-height: 38px;
  text-align: center;
  letter-spacing: -0.5px;
  color: ${props => props.theme.colors.primary};
  margin-bottom:20px;
  @media ${sm} {
    font-size: 38px;
    line-height: 42px;
  }
}
`;
export const ImageText = styled.div`
display: flex;
align-items: center;
margin-bottom:0px;
flex-direction:column;
text-align: center;
p{
  font-size: 16px; 
  line-height: 30px;
  color: #4A4A4A;
  
}
img{
  margin-right:20px;
}
@media ${md} {
  flex-direction:row;
  text-align: left;
}
`;











