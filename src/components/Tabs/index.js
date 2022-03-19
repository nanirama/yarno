import React from "react"
import { Section, Column } from "../common/styles"
import Tabs from "../common/Tabs"
import { ContentImageContainer } from "./styles"

const Component = ({ tabs }) => {
  return (
    <Tabs>
      {tabs.map((tab, i) => {
        return (
          <div label={tab.tab} image={tab.tabImage} key={`tab-${i}`}>
            <Section columns className="tab-content">
              <Column hideMobile>
                <ContentImageContainer>
                  {tab.contentImage}
                </ContentImageContainer>
              </Column>
              <Column flex={2}>{tab.content}</Column>
            </Section>
          </div>
        )
      })}
    </Tabs>
  )
}

export default Component
