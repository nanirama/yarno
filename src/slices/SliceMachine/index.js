import React, { Fragment } from "react"

import TeamMembers from "../TeamMembers"
import Features from "../Features"
import PageHeading from "../PageHeading"
import GoogleMap from "../GoogleMap"
import Anchor from "../Anchor"
import Waves from "../Waves"
import OutlinedHeroHeader from "../OutlinedHeroHeader"
import BiteSection from "../BiteSection"
import FloatingTestimonials from "../FloatingTestimonials"
import ResponsiveImage from "../ResponsiveImage"
import LonelyButton from "../LonelyButton"
import VideoWithCopy from "../VideoWithCopy"

import Text from "../Text"
import CenteredTitleTextArea from "../CenteredTitleTextArea"
import Quote from "../Quote"
import Image from "../Image"
import Video from "../Video"
import Grid from "../Grid"

import CTABar from "../CTABar"
import Advisors from "../Advisors"

import KeyResults from "../KeyResults"
import CaseStudyHero from "../CaseStudyHero"
import CaseStudyOverview from "../CaseStudyOverview"
import CaseStudyChallenges from "../CaseStudyChallenges"
import CaseStudyAddressedChallenges from "../CaseStudyAddressedChallenges"
import CaseStudyExplorer from "../CaseStudyExplorer"
import CaseStudyVideo from "../CaseStudyVideo"
import StatisticBlock from "../StatisticBlock"
import YoutubeVideo from "../YoutubeVideo"
import IFrame from "../IFrame"
import ImageHero from "../ImageHero"
import FeatureTextBlock from "../FeatureTextBlock"

import CardList from "../CardList"
import FilmStrip from "../FilmStrip"

import VideoHero from "../VideoHero"
import CustomerTestimonials from "../../components/home/CustomerTestimonials"
import Partners from "../../components/home/Partners"
import Benefits from "../../components/home/HowYarnoCanHelp"
import LearningScience from "../../components/home/LearningScience"

import SqueezeHero from "../SqueezeHero"
import BackgroundImage from "../BackgroundImage"
import Form from "../Form"
import LogoCloud from "../LogoCloud"
import TextBlock from "../TextBlock"
import TestimonialHero from "../TestimonialHero"
import SqueezeContactDetails from "../SqueezeContactDetails"
import SqueezeLegal from "../SqueezeLegal"
import Columns from "../Columns"
import Tabs from "../Tabs"
import ContactPageForm from "../ContactPageForm"
import CardLinks from "../CardLinks"

import IndustryHeader from "../IndustryHeader"
import IndustryPoints from "../IndustryPoints"
import IndustryCaseStudy from "../IndustryCaseStudy"
import IndustryLinks from "../IndustryLinks"
import StatisticCallout from "../StatisticCallout"

const SliceMachine = ({ body }) => {
  return (
    <Fragment>
      {body.map((slice, index) => {
        if (!slice) {
          return null
        }

        const key = `slice-${index}`
        switch (slice.slice_type) {
          case "text":
            return <Text key={key} slice={slice} />
            break
          case "centered_title_text_area":
            return <CenteredTitleTextArea key={key} slice={slice} />
            break
          case "card_link_list":
            return <CardLinks key={key} slice={slice} />
            break
          case "image_hero":
            return <ImageHero key={key} slice={slice} />
            break
          case "quote":
            return <Quote key={key} slice={slice} />
            break
          case "image":
            return <Image key={key} slice={slice} />
            break
          case "iframe":
            return <IFrame key={key} slice={slice} />
            break
          case "youtube_video":
            return <YoutubeVideo key={key} slice={slice} />
            break
          case "page_heading":
            return <PageHeading key={key} slice={slice} />
            break
          case "anchor":
            return <Anchor key={key} slice={slice} />
            break
          case "outlined_hero_header":
            return <OutlinedHeroHeader key={key} slice={slice} />
            break
          case "google_map":
            return <GoogleMap key={key} slice={slice} />
            break
          case "video_hero":
            return <VideoHero key={key} slice={slice} />
            break
          case "team_members":
            return <TeamMembers key={index} slice={slice} />
            break
          case "advisors":
            return <Advisors key={index} slice={slice} />
            break
          case "cta_bar":
            return <CTABar key={index} slice={slice} />
            break
          case "card_list":
            return <CardList key={index} slice={slice} />
            break
          case "tabs":
            return <Tabs key={index} slice={slice} />
            break
          case "features":
            return <Features key={index} slice={slice} />
            break
          case "feature_text_block":
            return <FeatureTextBlock key={index} slice={slice} />
            break
          case "testimonials":
            return (
              <CustomerTestimonials key={index} testimonials={slice.items} />
            )
            break
          case "partners":
            return (
              <Partners
                key={index}
                title={slice.primary.partnerstitle.text}
                description={slice.primary.description.text}
                partners={slice.items}
              />
            )
            break
          case "benefits":
            return (
              <Benefits
                key={index}
                title={slice.primary.benefitstitle.text}
                image={slice.primary.benefitsimage}
                buttonText={slice.primary.buttontext.text}
                buttonLink={slice.primary.buttonlink.url}
                benefits={slice.items}
              />
            )
            break
          case "proofs":
            return (
              <LearningScience
                key={index}
                title={slice.primary.proofstitle.text}
                items={slice.items}
              />
            )
            break
          case "case_study_hero":
            return <CaseStudyHero key={index} slice={slice} />
            break
          case "case_study_overview":
            return <CaseStudyOverview key={index} slice={slice} />
            break
          case "challenges":
            return <CaseStudyChallenges key={index} slice={slice} />
            break
          case "addressed_challenges":
            return <CaseStudyAddressedChallenges key={index} slice={slice} />
            break
          case "related_posts":
            return <CaseStudyExplorer key={index} slice={slice} />
            break
          case "striped_video":
            return <CaseStudyVideo key={index} slice={slice} />
            break
          case "key_results":
            return <KeyResults key={index} slice={slice} />
            break
          case "film_strip":
            return <FilmStrip key={index} slice={slice} />
            break
          case "squeeze_hero":
            return <SqueezeHero key={index} slice={slice} />
            break
          case "background_image":
            return <BackgroundImage key={index} slice={slice} />
            break
          case "logo_cloud":
            return <LogoCloud key={index} slice={slice} />
            break
          case "text_block":
            return <TextBlock key={index} slice={slice} />
            break
          case "squeeze_contact_details":
            return <SqueezeContactDetails key={index} slice={slice} />
            break
          case "squeeze_legal_links":
            return <SqueezeLegal key={index} slice={slice} />
            break
          case "testimonial_hero":
            return <TestimonialHero key={index} slice={slice} />
            break
          case "bite_section":
            return <BiteSection key={index} slice={slice} />
            break
          case "form":
            return <Form key={index} slice={slice} />
            break
          case "floating_testimonials":
            return <FloatingTestimonials key={index} slice={slice} />
            break
          case "statistic_block":
            return <StatisticBlock key={index} slice={slice} />
            break
          case "lonely_button":
            return <LonelyButton key={index} slice={slice} />
            break
          case "responsive_image":
            return <ResponsiveImage key={index} slice={slice} />
            break
          case "video_with_copy":
            return <VideoWithCopy key={index} slice={slice} />
            break
          case "columns":
            return <Columns key={index} slice={slice} />
            break
          case "vimeo_video":
            return <Video key={index} slice={slice} />
            break
          case "content_grid":
            return <Grid key={index} slice={slice} />
            break
          case "industry_header":
            return <IndustryHeader key={index} slice={slice} />
            break
          case "statistic_callout":
            return <StatisticCallout key={index} slice={slice} />
            break
          case "industry_points":
            return <IndustryPoints key={index} slice={slice} />
            break
          case "industry_case_study":
            return <IndustryCaseStudy key={index} slice={slice} />
            break
          case "waves":
            return <Waves key={index} slice={slice} />
            break
          case "industry_links":
            return <IndustryLinks key={index} slice={slice} />
            break
          case "contact_page_form":
            return <ContactPageForm key={index} slice={slice} />
            break
        }
      })}
    </Fragment>
  )
}

export default SliceMachine
