import styled from "styled-components"
import { sm, md, lg, xl } from "../../utils/breakpoints"

export const TopBar = styled.div`
background-color:#fbfbfb;
padding:10px 0rem;
@media ${md} {
  padding:10px 2rem;
}
.row{
  display:flex;
  justify-content: space-between;
  align-items: center;
}
`
export const Breadcrumbs = styled.ul`
list-style: none;
display:flex;
font-size:17px;
color: #333;
padding: 0;
ol{
  list-style:none;
  padding:0;
  display:flex;
  @media only screen and (max-width:599px) {
    flex-direction:column;
  }
  li{
    font-weight:700;
    color: #25C1A9;
    @media only screen and (max-width:599px) {
      margin-bottom:10px;
    }
    @media only screen and (max-width:479px) {
      font-size:15px;
    }
  }
}
div{
  display:flex;
}


svg{
  margin:4px 12px 0 0;
}
a {
  color: #888;
  text-decoration: none;
  padding-left:0px;
  margin-right:20px;
  font-weight:700;
  @media only screen and (max-width:599px) {
    margin-right:0px;
  }
    &:hover,
    &:active {
      color:#25C1A9;
    }
   
}

`
