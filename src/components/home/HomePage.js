import React, { useState } from "react";
import { Button } from "@yarno/thread";
import { Link, graphql } from "gatsby";
import { MetaData } from "../common/meta";
import { PageContainer, Section } from "../common/styles";
import Header from "./Header";
import HowYarnoCanWork from "./HowYarnoCanWork";
import HowYarnoCanHelp from "./HowYarnoCanHelp";
import LearningScience from "./LearningScience";
import Partners from "./Partners";
import CustomerTestimonials from "./CustomerTestimonials";
import { TopGradientBox } from "./styles";

import { Layout } from "../common";

export default function HomePage({ location }) {
  return (
    <>
      <MetaData data={{}} location={location} type="profile" />
      <Layout isHome>
        <Header />
        <PageContainer noOverflow>
          <HowYarnoCanWork />
          <CustomerTestimonials />
          <Partners />
          <HowYarnoCanHelp />

          <Section style={{ marginTop: 0 }}>
            <Link to="/contact-us">
              <Button
                secondary
                label="Get started with Yarno"
                style={{ marginBottom: "5rem" }}
              />
            </Link>
          </Section>
          <LearningScience />
        </PageContainer>
      </Layout>
    </>
  );
}
