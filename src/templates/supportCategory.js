import React from "react"
import styled from "styled-components"
import { graphql, Link } from "gatsby"

import Layout from "../components/Layout"
import Container from "../components/common/Container"
import SupportCategorySidebar from "../components/SupportCategorySidebar"
import SupportArticle from "../components/SupportArticle"
import SupportContact from "../components/SupportContact"
import SupportBreadcrumbs from "../components/SupportBreadcrumbs"

const Template = ({ data, pageContext, location }) => {
  const { title, articles } = data.CategoryData.data

  const bcrumb = [
    { 'name': 'Support', 'link': '/support/' },
    { 'name': title.text, 'link': null }
  ]
  return (
    <Layout
      location={location}
      prismicLayout={data.prismicLayout}>
      <SupportBreadcrumbs bcrumb={bcrumb} />
      <Section>
        <Container>
          <TopGrid>
            <Item>
              <h3>{title.text}</h3>
              {articles && articles[0].article.document && articles[0].article.document.uid && <SupportCategorySidebar data={articles} categoryUrl={data.CategoryData.uid} />}
            </Item>
            <Item>
              {articles[0].article.document && articles[0].article.document.uid && <SupportArticle data={articles[0].article.document} />}
            </Item>
          </TopGrid>
        </Container>
      </Section>
      <SupportContact />
    </Layout>
  );
}

export default Template

export const query = graphql`
  query SupportCategoryQuery($id: String) {
    ...PrismicLayout
    CategoryData: prismicSupportCategory(id: {eq: $id}) {
      ...SupportCategory
    }
  }
`
const TopGrid = styled.div`
display: grid;
grid-template-columns: 4fr 8fr;
grid-gap: 5px;
padding:40px 0;
@media only screen and (max-width:959px) {
  grid-template-columns:1fr;  
  padding-bottom:0;
}
`;
const Section = styled.div`
@media only screen and (min-width:960px) {
  padding:0 1rem;
}
`;
const Item = styled.div`
display: flex;
flex-direction: column;
padding: .5rem;
margin-bottom:15px;
padding:0 15px;
@media only screen and (max-width:850px) {
  padding:0;
}
h3{
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
    text-decoration:none;
    
  }
  svg{
    margin-right:16px;
    float:left;
    height:25px;
  }
}
`;
