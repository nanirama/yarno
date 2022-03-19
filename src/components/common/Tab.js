import React, { Component } from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { colors } from "@yarno/thread"
import { sm, md, lg } from "../../utils/breakpoints"

const TabItem = styled.li`
  border-bottom: ${props =>
    props.tabIsActive
      ? `2px solid ${colors.orangeBrightSun};`
      : `2px solid #f4f4f4;`};
  padding: 1.5rem 0 0.5rem 0;
  position: relative;
  justify-content: space-between;
  align-items: baseline;
  &:hover {
    cursor: pointer;
  }

  i {
    color: ${colors.grayDark};
    transition: all 0.2s linear;
  }

  ${props =>
    props.tabIsActive &&
    `
    i {
      transform: scaleY(-1);
      transition: all .2s linear;
    }
`} h4 {
    font-family: "Raleway", sans-serif;
    color: #333;
    text-align: left;
    position: relative;
    i {
      font-size: 1.6rem;
      position: absolute;
      top: 50%;
      right: 0;
      margin-top: -0.8rem;
    }
  }

  @media ${sm} {
    width: 100%;
    flex: 1;
    font-size: 1.2rem;
    font-weight: 700;
    padding: 0 0 1.5rem 0;

    i {
      display: none;
    }
    ${props =>
      props.tabIsActive
        ? `
        border-bottom: 4px solid ${colors.orangeBrightSun};
        :after {
          content: "";
          position: absolute;
          top: 100%;
          left: 45%;
          width: 0;
          height: 0;
          border-top: solid 8px ${colors.orangeBrightSun};
          border-left: solid 8px transparent;
          border-right: solid 8px transparent;
        }
        `
        : `border-bottom: 4px solid #f4f4f4;`}

    h4 {
      text-align: center;
    }
  }
`

const Image = styled(GatsbyImage)`
  max-height: 10rem;
  filter: ${props => (props.tabIsActive ? "grayscale(0%)" : "grayscale(100%)")};
  transition: 0.2s filter ease;
`

const MobileTabContent = styled.li`
  box-shadow: 1px 2px 7px 0 rgba(0, 0, 0, 0.17);
  padding: 0 2rem;
  display: none;

  * {
    text-align: left;
  }

  ${props =>
    props.isActive &&
    `
    display: block;
`} .tab-content {
    margin: 0;
  }

  @media ${sm} {
    display: none;
  }
`

const ImageWrap = styled.div`
  justify-content: center;
  display: none;

  @media ${sm} {
    display: flex;
  }
`

const Tab = ({ label, image, onClick, activeTab, children }) => {
  return (
    <React.Fragment>
      <TabItem tabIsActive={activeTab === label} onClick={onClick}>
        <ImageWrap>{image}</ImageWrap>
        <h4>
          {label} <i className="fa fa-angle-down" />
        </h4>
      </TabItem>
      <MobileTabContent isActive={label === activeTab}>
        {children.map(child => {
          if (child.props.label !== activeTab) return null
          return child.props.children
        })}
      </MobileTabContent>
    </React.Fragment>
  )
}

export default Tab
