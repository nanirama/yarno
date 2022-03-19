import React, { useState, useEffect } from "react"
import Tab from "./Tab"
import styled from "styled-components"
import { sm, md, lg, smPixels } from "../../utils/breakpoints"

const TabList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  width: 100%;

  @media ${sm} {
    flex-direction: row;
    margin: 3rem auto 0 auto;
    max-width: 99rem;
  }
`

const TabContent = styled.div`
  display: none;
  opacity: 0;
  width: 100%;
  padding: 5rem 0 0 0;

  h5 {
    color: black;
  }
  ${props =>
    props.isActive &&
    `
    opacity: 1;
    transition: 0.2s opacity ease-in;
`}
  @media ${sm} {
    display: block;
    width: 90%;

    div {
      text-align: left;
    }
  }
`

const Tabs = props => {
  const initialActiveTab = props.children[0].props.label
  const [activeTab, setActiveTab] = useState(initialActiveTab)
  const [isActive, setActiveState] = useState(false)

  // Active state is used to enable animations when changing tabs
  useEffect(() => {
    setActiveState(true)
  }, [activeTab])

  const onClickTabItem = tab => {
    const smWidthInEm = Number(sm.match(/[0-9]+/g).toString())
    const windowWidthInEm = window.innerWidth / 16
    const isMobile = windowWidthInEm <= smWidthInEm
    if (tab === activeTab && isMobile) {
      setActiveTab(null)
    } else {
      if (tab !== activeTab) {
        setActiveState(false)
      }
      setActiveTab(tab)
    }
  }
  return (
    <React.Fragment>
      <TabList>
        {props.children.map(child => {
          const { label, image } = child.props

          return (
            <Tab
              activeTab={activeTab}
              key={label}
              label={label}
              image={image}
              onClick={() => onClickTabItem(label)}
              children={props.children}
            />
          )
        })}
      </TabList>

      <TabContent isActive={isActive}>
        {props.children.map(child => {
          if (child.props.label !== activeTab) return null
          return child.props.children
        })}
      </TabContent>
    </React.Fragment>
  )
}

export default Tabs
