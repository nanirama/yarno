import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import YarnoVideo from "../../common/YarnoVideo";
import { Button, colors } from "@yarno/thread";
import { sm, md } from "../../../utils/breakpoints"

const Container = styled.div`
  background-color: ${colors.grayWhiteSmoke};
  padding: 5rem 2rem;

  @media ${sm} {
    padding: 5rem 3rem;
  }

  @media ${md} {
    padding: 5rem;
  }
`

const ContentContainer = styled.div`
  text-align: center;

  @media ${md} {
    padding-left: 3rem;
    text-align: left;
    vertical-align: middle;
    display: flex;
    justify-content: center;
    flex-direction: column;
    min-width: 50%;
  }
`

const Wrapper = styled.div`
  width: 100%;
  max-width: 160rem;
  margin: 0 auto;

  @media ${md} {
    display: flex;
    flex-direction: row;
  }
`

const Heading = styled.h3`
  margin-bottom: 2rem;
  margin-top: 0;

  ${props => props.mobile && `
    @media ${md} {
      display: none;
    }
  `}

  ${props => props.desktop && `
    display: none;

    @media ${md} {
      display: block;
      font-size: 2.2rem;
      margin: 0;
    }
  `}
`

const MoreAboutYarnoButton = styled(Link)`
  button {
    color: #B44CC8;
    border-color: #B44CC8;
    margin: 0 auto;
    textAlign: center;
    margin-top: 2rem;
    width: 100%;

    @media ${sm} {
      width: auto;
    }
  }

  @media ${md} {
    margin-top: 0;
  }
`

const VideoSection = () => {
  return (
    <Container>
      <Wrapper>
        <Heading mobile>
          Watch how we embed business-critical information in three minutes
          a day
        </Heading>
        <YarnoVideo videoId={"333213798"} title="About Yarno video" />
        <ContentContainer>
          <Heading desktop>
            Watch how we embed business-critical information in three minutes
            a day
          </Heading>
          <MoreAboutYarnoButton to="/why-yarno">
            <Button
              label="Find out more about Yarno"
              hollow
              style={{
                color: "#B44CC8",
                borderColor: "#B44CC8",
                margin: "0 auto",
                textAlign: "center",
                marginTop: "2rem"
              }}
            />
          </MoreAboutYarnoButton>
        </ContentContainer>
      </Wrapper>
    </Container>
  )
}

export default VideoSection
