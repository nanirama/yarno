import { graphql } from "gatsby"

/**
 * These so called fragments are the fields we query on each template.
 * A fragment make queries a bit more reuseable, so instead of typing and
 * remembering every possible field, you can just use
 *   ...GhostPostFields
 * for example to load all post fields into your GraphQL query.
 *
 * Further info 👉🏼 https://www.gatsbyjs.org/docs/graphql-reference/#fragments
 *
 */

export const exportedFragments = graphql`
  fragment PrismicSiteBanner on Query {
    prismicSitebanner {
      id
      data {
        text {
          richText
        }
        url {
          url
        }
      }
    }
  }
  fragment PrismicSqueezePageLayout on Query {
    prismicSqueezePageLayout {
      id
      data {
        squeeze_header_logo {
          url
        }
        squeeze_header_logo_link {
          url
        }
        squeeze_header_phone_label
        squeeze_header_phone_link {
          url
        }
        squeeze_header_email_label
        squeeze_header_email_link {
          url
        }
      }
    }
  }
  fragment PrismicLayout on Query {
    prismicLayout {
      id
      data {
        tiny_links {
          link {
            richText
          }
        }
        acknowledgement {
          richText
        }
        copyright {
          richText
        }
        primary_nav {
          document {
            ... on PrismicPrimaryNavigation {
              data {
                logo {
                  url(imgixParams: { h: 58 })
                }
                display_name {
                  html
                  text
                  richText
                }
                body {
                  ... on PrismicPrimaryNavigationDataBodyTab {
                    id
                    primary {
                      level_1_link_label
                      level_1_link {
                        document {
                          ... on PrismicPage {
                            type
                            uid
                          }
                          ... on PrismicCaseStudy {
                            type
                            uid
                          }
                          ... on PrismicBlogIndex {
                            type
                            id
                          }
                        }
                      }
                    }
                    items {
                      level_2_link_label
                      level_2_link {
                        document {
                          ... on PrismicPage {
                            type
                            uid
                          }
                          ... on PrismicCaseStudy {
                            type
                            uid
                          }
                        }
                      }
                    }
                  }
                }
              }
              id
            }
          }
        }
        primary_footer {
          document {
            ... on PrismicPrimaryFooter {
              id
              data {
                body {
                  ... on PrismicPrimaryFooterDataBodyTab {
                    id
                    slice_type
                    items {
                      link_text
                      link_style
                      link {
                        uid
                        url
                        type
                      }
                    }
                    primary {
                      column_heading
                    }
                  }
                }
                career_statement {
                  richText
                }
                career_link {
                  url
                }
                address {
                  richText
                }
                google_maps_link {
                  url
                }
                contact_phone_link {
                  url
                }
                contact_phone
                contact_email
                twitter_handle
                linked_in
              }
            }
          }
        }
      }
    }
  }

  fragment FeaturedTopics on Query {
    prismicFeaturedTopics {
      id
      data {
        topics {
          topic {
            uid
            type
            document {
              ... on PrismicTag {
                id
                data {
                  name
                  description {
                    richText
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  fragment JobPost on PrismicJobPost {
    uid
    ...JobPostSEO
    data {
      title {
        richText
      }
      body {
        ... on PrismicJobPostDataBodyText {
          id
          slice_type
          primary {
            text {
              richText
            }
          }
        }
        ... on PrismicJobPostDataBodyQuote {
          id
          slice_type
          primary {
            quote {
              richText
            }
          }
        }
        ... on PrismicJobPostDataBodyImage {
          id
          slice_type
          primary {
            image {
              url
            }
            caption {
              text
            }
          }
        }
      }
    }
  }
  fragment BlogIndex on PrismicBlogIndex {
    data {
      body {
        ... on PrismicBlogIndexDataBodyPageHeading {
          id
          slice_type
          slice_label
          primary {
            title {
              richText
            }
            subtitle {
              richText
            }
          }
        }
      }
    }
  }
  fragment BlogPostCard on PrismicBlogPost {
    type
    uid
    id
    data {
      title {
        text
      }
      read_time_in_minutes
      featured_image {
        alt
        gatsbyImageData(width: 397, height: 262, layout: CONSTRAINED)
      }
      release_date(locale: "en-Au")
      read_time_in_minutes
      excerpt {
        richText
      }
      author {
        document {
          ... on PrismicAuthor {
            uid
            data {
              name {
                text
              }
              profile_picture {
                url
              }
            }
          }
        }
      }
      tags {
        tag {
          document {
            ... on PrismicTag {
              type
              uid
              data {
                name
              }
            }
          }
        }
      }
    }
  }
  fragment CaseStudyTestimonialsSlice on PrismicCaseStudyDataBodyFloatingTestimonials {
    id
    slice_type
    slice_label
    primary {
      floating_testimonial_title {
        richText
      }
    }
    items {
      floating_testimonial_quotee
      floating_testimonial_quote {
        richText
      }
      floating_testimonial_logo {
        gatsbyImageData(height: 70)
      }
    }
  }
  fragment CaseStudy on PrismicCaseStudy {
    id
    ...CaseStudySEO
    data {
      title {
        richText
      }
      body {
        ...CaseStudyTestimonialsSlice
        ... on PrismicCaseStudyDataBodyKeyResults {
          id
          slice_type
          items {
            result {
              richText
            }
          }
        }
        ... on PrismicCaseStudyDataBodyRelatedPosts {
          id
          slice_type
          items {
            related_result {
              document {
                ... on PrismicCaseStudy {
                  id
                  data {
                    title {
                      richText
                    }
                  }
                }
              }
            }
          }
        }
        ... on PrismicCaseStudyDataBodyCaseStudyHero {
          id
          slice_type
          primary {
            company_logo {
              url
              alt
              fluid(maxHeight: 80, maxWidth: 280) {
                src
                srcSet
              }
            }
            hero_title {
              richText
            }
            image {
              url
            }
          }
        }
        ... on PrismicCaseStudyDataBodyRelatedPosts {
          id
          primary {
            relatable_prompt {
              text
            }
          }
          items {
            related_result {
              type
              uid
            }
            related_image {
              gatsbyImageData(height: 150, layout: CONSTRAINED)
              alt
            }
            related_title {
              text
            }
          }
          slice_label
          slice_type
        }
        ... on PrismicCaseStudyDataBodyStripedVideo {
          id
          slice_type
          primary {
            video_title {
              richText
            }
            vimeo_id
          }
        }
        ... on PrismicCaseStudyDataBodyFilmStrip {
          id
          slice_type
          items {
            still {
              alt
              url
            }
          }
        }
        ... on PrismicCaseStudyDataBodyChallenges {
          id
          slice_type
          primary {
            challenge_context {
              richText
            }
          }
          items {
            challenge_description {
              richText
            }
            challenge_title {
              text
            }
          }
        }
        ... on PrismicCaseStudyDataBodyQuote {
          id
          primary {
            quote_author
            quote_text {
              richText
            }
            quote_title
          }
          slice_type
        }
        ... on PrismicCaseStudyDataBodyAddressedChallenges {
          id
          primary {
            addressed_image {
              alt
              url
            }
            addressed_content {
              richText
            }
          }
          slice_type
        }
        ... on PrismicCaseStudyDataBodyCenteredTitleTextArea {
          id
          slice_type
          primary {
            text_content {
              richText
            }
          }
        }
        ... on PrismicCaseStudyDataBodyCaseStudyOverview {
          id
          slice_type
          primary {
            who_are_they {
              richText
            }
          }
          items {
            feature_text {
              richText
            }
            feature_image {
              url
              alt
            }
          }
        }
      }
    }
  }
  fragment BlogPost on PrismicBlogPost {
    uid
    data {
      title {
        text
        richText
      }
      excerpt {
        text
      }
      tags {
        tag {
          document {
            ... on PrismicTag {
              id
              data {
                name
              }
            }
          }
        }
      }
      release_date
      read_time_in_minutes
      featured_image {
        alt
        gatsbyImageData(layout: CONSTRAINED, width: 400, height: 300)
      }
      body {
        ... on PrismicBlogPostDataBodyText {
          id
          slice_type
          primary {
            text {
              richText
            }
          }
        }
        ... on PrismicBlogPostDataBodyQuote {
          id
          primary {
            quote_author
            quote_text {
              richText
            }
            quote_title
          }
          slice_type
        }
        ... on PrismicBlogPostDataBodyImage {
          id
          slice_type
          primary {
            image {
              url(imgixParams: { maxW: 800 })
            }
            caption {
              text
            }
          }
        }
        ... on PrismicBlogPostDataBodyVimeoVideo {
          id
          slice_type
          slice_label
          primary {
            vimeo_video_id
            vimeo_video_title
          }
        }
        ... on PrismicBlogPostDataBodyYoutubeVideo {
          id
          slice_type
          slice_label
          primary {
            youtube_video_id
            youtube_video_title
          }
        }
        ... on PrismicBlogPostDataBodyIframe {
          id
          slice_type
          slice_label
          primary {
            iframe {
              richText
            }
          }
        }
      }
      author {
        uid
        type
        document {
          ... on PrismicAuthor {
            id
            data {
              name {
                text
              }
              profile_picture {
                alt
                copyright
                url
              }
              bio {
                richText
              }
            }
          }
        }
      }
    }
  }

  fragment PageSEO on PrismicPage {
    data {
      meta_title
      meta_description
      body1 {
        ... on PrismicPageDataBody1GeneralCard {
          id
          slice_label
          slice_type
          primary {
            description {
              richText
            }
            image {
              url
            }
          }
        }
      }
    }
  }

  fragment SqueezePageSEO on PrismicSqueezePage {
    data {
      meta_title
      meta_description
      body1 {
        ... on PrismicSqueezePageDataBody1GeneralCard {
          id
          slice_label
          slice_type
          primary {
            description {
              richText
            }
            image {
              url
            }
          }
        }
      }
    }
  }

  fragment JobPostSEO on PrismicJobPost {
    data {
      meta_title
      meta_description
      body1 {
        ... on PrismicJobPostDataBody1GeneralCard {
          id
          slice_label
          slice_type
          primary {
            description {
              richText
            }
            image {
              url
            }
          }
        }
      }
    }
  }

  fragment CaseStudySEO on PrismicCaseStudy {
    data {
      meta_title
      meta_description
      body1 {
        ... on PrismicCaseStudyDataBody1GeneralCard {
          id
          slice_label
          slice_type
          primary {
            description {
              richText
            }
            image {
              url
            }
          }
        }
      }
    }
  }
  fragment IndustryPageSEO on IndustryPage {
    data {
      meta_title
      meta_description
      body1 {
        ... on PrismicIndustryPageDataBody1GeneralCard {
          id
          slice_label
          slice_type
          primary {
            description {
              richText
            }
            image {
              url
            }
          }
        }
      }
    }
  }

  fragment OutlinedHeroHeaderSlice on PrismicPageDataBodyOutlinedHeroHeader {
    id
    slice_type
    primary {
      outlined_title {
        text
      }
      outlined_subtitle {
        text
      }
      outlined_description {
        richText
      }
      outlined_hero_image {
        alt
        gatsbyImageData(width: 260, layout: CONSTRAINED)
      }
    }
  }

  fragment WavesSlice on PrismicPageDataBodyWaves {
    id
    slice_type
    primary {
      inverted
      background_color
    }
  }

  fragment StripedVideoSlice on PrismicPageDataBodyStripedVideo {
    id
    slice_type
    primary {
      video_title {
        richText
      }
      vimeo_id
    }
  }

  fragment LonelyButtonSlice on PrismicPageDataBodyLonelyButton {
    id
    slice_type
    slice_label
    primary {
      background_color
      button_style
      button_hollow
      link_label
      link_link {
        type
        uid
      }
    }
  }

  fragment PageTabSlice on PrismicPageDataBodyTabs {
    id
    slice_type
    slice_label
    primary {
      tab_heading {
        richText
      }
      tab_subheading {
        richText
      }
    }
    items {
      tab_label
      tab_image {
        alt
        gatsbyImageData(height: 100, layout: CONSTRAINED)
      }
      tab_content_image {
        alt
        gatsbyImageData(height: 450, layout: CONSTRAINED)
      }
      tab_content {
        richText
      }
    }
  }

  fragment VideoWithCopySlice on PrismicPageDataBodyVideoWithCopy {
    id
    slice_type
    primary {
      optional_link {
        uid
        type
      }
      optional_link_text
      video_with_copy_content {
        richText
      }
      vimeo_id
    }
  }

  fragment ResponsiveImageSlice on PrismicPageDataBodyResponsiveImage {
    id
    slice_type
    primary {
      responsive_mobile_image {
        alt
        gatsbyImageData(width: 240, layout: CONSTRAINED)
      }
      responsive_desktop_image {
        alt
        gatsbyImageData(width: 600, layout: CONSTRAINED)
      }
    }
  }

  fragment PageHeadingSlice on PrismicPageDataBodyPageHeading {
    id
    slice_label
    slice_type
    primary {
      title {
        richText
      }
      subtitle {
        richText
      }
    }
  }

  fragment FloatingTestimonialsSlice on PrismicPageDataBodyFloatingTestimonials {
    id
    slice_type
    slice_label
    primary {
      floating_testimonial_title {
        richText
      }
    }
    items {
      floating_testimonial_quotee
      floating_testimonial_quote {
        richText
      }
      floating_testimonial_logo {
        gatsbyImageData(height: 70)
      }
    }
  }

  fragment BiteSectionSlice on PrismicPageDataBodyBiteSection {
    id
    slice_label
    slice_type
    primary {
      bite_title {
        richText
      }
      bite_description {
        richText
      }
      bite_content {
        richText
      }
      bite_content_secondary {
        richText
      }
    }
  }

  fragment FeaturesSlice on PrismicPageDataBodyFeatures {
    id
    slice_label
    slice_type
    primary {
      description {
        text
      }
      featurestitle {
        text
      }
    }
    items {
      button_hash
      vimeo_id
      buttonlink {
        url
      }
      buttontext {
        text
      }
      featureimage {
        alt
        gatsbyImageData(width: 230, height: 200)
      }
      featuretitle {
        text
      }
    }
  }

  fragment FeatureTextBlockSlice on PrismicPageDataBodyFeatureTextBlock {
    id
    slice_type
    slice_label
    primary {
      feature_text_block_title
      feature_text_block_subtitle
      feature_text_block_alignment
      feature_text_block_image {
        alt
        gatsbyImageData
      }
      feature_text_block_content {
        richText
      }
    }
    slice_type
  }

  fragment BenefitsSlice on PrismicPageDataBodyBenefits {
    id
    slice_label
    slice_type
    primary {
      benefitsimage {
        alt
        gatsbyImageData(width: 490, height: 380)
      }
      benefitstitle {
        text
      }
      buttonlink {
        url
      }
      buttontext {
        text
      }
    }
    items {
      carddescription {
        text
      }
      cardtitle {
        text
      }
    }
  }

  fragment ProofsSlice on PrismicPageDataBodyProofs {
    id
    slice_label
    slice_type
    primary {
      proofstitle {
        text
      }
    }
    items {
      cardimage {
        alt
        gatsbyImageData(width: 250, height: 200)
      }
      cardtext {
        text
      }
      cardtitle {
        text
      }
      subtitle {
        text
      }
    }
  }

  fragment FormSlice on PrismicPageDataBodyForm {
    id
    slice_label
    slice_type
    primary {
      form_reference {
        document {
          ...CampaignMonitorForm
          ... on PrismicPipedriveForm {
            id
            type
            data {
              submission_source
              submit_button_label
              success_message {
                richText
              }
            }
          }
        }
      }
      pre_form_content {
        richText
      }
      form_background_colour
      form_font_colour
      full_width_inputs
    }
  }

  fragment FilmStripSlice on PrismicPageDataBodyFilmStrip {
    id
    slice_label
    slice_type
    items {
      still {
        alt
        url
      }
    }
  }

  fragment CampaignMonitorForm on PrismicCampaignMonitorForm {
    id
    type
    data {
      campaign_monitor_list_id
      include_yarn_subscribe_checkbox
      submit_button_label
      success_message {
        richText
      }
      consent_text
      show_form_labels
      body {
        ... on PrismicCampaignMonitorFormDataBodyTextInput {
          id
          primary {
            text_input_name_attribute
            text_input_label
            text_input_required
          }
          slice_type
          slice_label
        }
        ... on PrismicCampaignMonitorFormDataBodyRadioInput {
          id
          slice_label
          slice_type
          items {
            radio_input_option_label
          }
          primary {
            radio_input_label
            radio_input_name_attribute
            radio_input_required
          }
        }
      }
    }
  }

  fragment ContactUsSlice on PrismicPageDataBodyContactUs {
    id
    slice_type
    slice_label
  }

  fragment ContactPageFormSlice on PrismicPageDataBodyContactPageForm {
    id
    slice_type
    slice_label
    primary {
      salesperson_image {
        gatsbyImageData(width: 130, height: 130)
        alt
      }
    }
  }

  fragment ContentGridSlice on PrismicPageDataBodyContentGrid {
    id
    slice_label
    slice_type
    items {
      grid_item_content {
        richText
      }
      grid_item_image {
        alt
        url
      }
    }
  }

  fragment TextBlockSlice on PrismicPageDataBodyTextBlock {
    id
    slice_label
    slice_type
    primary {
      text_block_align
      text_block_background_colour
      text_block_content {
        richText
      }
      text_block_image {
        alt
        url
      }
      text_block_form_reference {
        document {
          ... on PrismicCampaignMonitorForm {
            id
            type
            data {
              campaign_monitor_list_id
              include_yarn_subscribe_checkbox
              submit_button_label
              success_message {
                richText
              }
            }
          }
          ... on PrismicPipedriveForm {
            id
            type
            data {
              submission_source
              submit_button_label
              success_message {
                richText
              }
            }
          }
        }
      }
    }
  }

  fragment PartnersSlice on PrismicPageDataBodyPartners {
    id
    slice_label
    slice_type
    items {
      partnerlogo {
        alt
        gatsbyImageData(height: 70, layout: CONSTRAINED)
      }
    }
    primary {
      description {
        text
      }
      partnerstitle {
        text
      }
    }
  }

  fragment TestimonialsSlice on PrismicPageDataBodyTestimonials {
    id
    slice_label
    slice_type
    items {
      authorname {
        text
      }
      company {
        text
      }
      testimonial {
        text
      }
    }
  }

  fragment AnchorSlice on PrismicPageDataBodyAnchor {
    id
    slice_label
    slice_type
    primary {
      identifier
    }
  }

  fragment AdvisorsSlice on PrismicPageDataBodyAdvisors {
    id
    slice_label
    slice_type
    items {
      advisor {
        id
        document {
          ... on PrismicAdvisor {
            data {
              name {
                text
              }
              linkedin {
                url
              }
              job_title {
                text
              }
              profile_picture {
                alt
                gatsbyImageData(
                  layout: CONSTRAINED
                  width: 130
                  height: 130
                  imgixParams: { bg: "#FFFFFF" }
                )
              }
            }
          }
        }
      }
    }
  }

  fragment TeamMembersSlice on PrismicPageDataBodyTeamMembers {
    id
    slice_label
    slice_type
    items {
      yarnoer {
        id
        document {
          ... on PrismicYarnoer {
            data {
              name {
                text
              }
              linkedin {
                url
              }
              job_title {
                text
              }
              profile_picture {
                url
                alt
                gatsbyImageData(width: 130, height: 130, layout: CONSTRAINED)
              }
            }
          }
        }
      }
    }
  }

  fragment CtaBarSlice on PrismicPageDataBodyCtaBar {
    id
    slice_type
    primary {
      cta_background
      cta_button_text
      cta_font
      cta_content {
        richText
      }
      cta_link {
        uid
        type
        link_type
        url
      }
    }
  }

  fragment VideoHeroSlice on PrismicPageDataBodyVideoHero {
    id
    slice_label
    slice_type
    primary {
      video_hero_image {
        alt
        gatsbyImageData(width: 500, height: 818, layout: CONSTRAINED)
      }
      video_hero_title {
        text
      }
      description {
        text
      }
      call_to_action_text
      vimeo_id
    }
  }

  fragment CardLinkListSlice on PrismicPageDataBodyCardLinkList {
    id
    slice_label
    slice_type
    items {
      card_link_category {
        richText
        text
      }
      card_link_image {
        url
      }
      card_link_content {
        richText
      }
      card_link_label
      card_link_link {
        uid
        type
      }
    }
  }

  fragment GoogleMapSlice on PrismicPageDataBodyGoogleMap {
    id
    slice_label
    slice_type
    primary {
      query
      map_title
    }
  }

  fragment CardListSlice on PrismicPageDataBodyCardList {
    id
    slice_label
    slice_type
    items {
      card_image {
        url
      }
      card_content {
        richText
      }
    }
  }

  fragment LogoCloudSlice on PrismicPageDataBodyLogoCloud {
    id
    slice_label
    slice_type
    primary {
      logo_cloud_heading {
        richText
      }
    }
    items {
      logo_cloud_image {
        alt
        gatsbyImageData(height: 80, layout: CONSTRAINED)
      }
    }
  }

  fragment IndustryLogoCloudSlice on PrismicIndustryPageDataBodyLogoCloud {
    id
    slice_label
    slice_type
    primary {
      logo_cloud_heading {
        richText
      }
    }
    items {
      logo_cloud_image {
        alt
        gatsbyImageData(height: 70, imgixParams: { maxW: 130, maxH: 70 })
      }
    }
  }
  fragment IndustryHeaderSlice on PrismicIndustryPageDataBodyIndustryHeader {
    id
    primary {
      header_button_text
      header_button_link {
        link_type
        uid
      }
      header_image {
        url
        alt
      }
      header_subtitle {
        richText
      }
      header_title {
        richText
      }
    }
    slice_type
    items {
      header_checklist {
        richText
      }
    }
  }

  fragment StatisticCalloutSlice on PrismicIndustryPageDataBodyStatisticCallout {
    id
    slice_type
    primary {
      statistic_color
      statistic_quote {
        richText
      }
      statistic_quotee
      statistic_quotee_role
      statistic_stat
      statistic_symbol
      statistic_text {
        richText
      }
    }
  }
  fragment PageIndustryPointsSlice on PrismicPageDataBodyIndustryPoints {
    id
    slice_type
    primary {
      points_header {
        richText
      }
    }
    items {
      point_content {
        richText
      }
      point_image {
        alt
        url
      }
      point_title {
        richText
      }
    }
  }
  fragment IndustryPointsSlice on PrismicIndustryPageDataBodyIndustryPoints {
    id
    slice_type
    primary {
      points_header {
        richText
      }
    }
    items {
      point_content {
        richText
      }
      point_image {
        alt
        url
      }
      point_title {
        richText
      }
    }
  }
  fragment PageImageHeroSlice on PrismicPageDataBodyImageHero {
    id
    slice_type
    slice_label
    primary {
      image_hero_image {
        gatsbyImageData
      }
      image_hero_link {
        uid
        type
        link_type
        url
      }
      image_hero_link_text
      image_hero_title {
        richText
      }
    }
  }
  fragment IndustryCaseStudySlice on PrismicIndustryPageDataBodyIndustryCaseStudy {
    id
    slice_type
    primary {
      case_study_content {
        richText
      }
      case_study_image {
        alt
        url
      }
      case_study_logo {
        alt
        url
      }
      case_study_vimeo_id
    }
  }
  fragment IndustryLinksSlice on PrismicIndustryPageDataBodyIndustryLinks {
    id
    slice_type
    primary {
      links_heading {
        richText
      }
    }
    items {
      link_image {
        alt
        gatsbyImageData(height: 175, layout: CONSTRAINED)
      }
      link_link {
        uid
        type
      }
      link_supporting_content {
        richText
      }
      link_text {
        text
      }
    }
  }
  fragment PageIndustryLinksSlice on PrismicPageDataBodyIndustryLinks {
    id
    slice_type
    primary {
      links_heading {
        richText
      }
    }
    items {
      vimeo_id
      link_image {
        alt
        gatsbyImageData(height: 175, layout: CONSTRAINED)
      }
      link_link {
        uid
        type
      }
      link_supporting_content {
        richText
      }
      link_text {
        text
      }
    }
  }
  fragment SupportArticle on PrismicSupportArticle {
    uid
      data {
        title {
          text
          html
        }
        body {
            ... on PrismicSupportArticleDataBodyText {
              id
              slice_type
              primary {
                text {
                  richText
                }
              }
            }
            ... on PrismicSupportArticleDataBodyQuote {
              id
              primary {
                quote_author
                quote_text {
                  richText
                }
                quote_title
              }
              slice_type
            }
            ... on PrismicSupportArticleDataBodyImage {
              id
              slice_type
              primary {
                image {
                  url(imgixParams: { maxW: 800 })
                }
                caption {
                  text
                }
              }
            }
            ... on PrismicSupportArticleDataBodyVimeoVideo {
              id
              slice_type
              slice_label
              primary {
                vimeo_video_id
                vimeo_video_title
              }
            }
            ... on PrismicSupportArticleDataBodyYoutubeVideo {
              id
              slice_type
              slice_label
              primary {
                youtube_video_id
                youtube_video_title
              }
            }
            ... on PrismicSupportArticleDataBodyIframe {
              id
              slice_type
              slice_label
              primary {
                iframe {
                  richText
                }
              }
            }
        }
      }
   }
   fragment SupportCategory on PrismicSupportCategory {
        uid
        data {
            title {
                text
                html
            }
            articles {
                article {
                    document {
                    ... on PrismicSupportArticle {
                        id
                        uid
                        data {
                          title {
                            text
                            html
                          }
                          body {
                            ... on PrismicSupportArticleDataBodyText {
                              id
                              slice_type
                              primary {
                                text {
                                  richText
                                }
                              }
                            }
                            ... on PrismicSupportArticleDataBodyQuote {
                              id
                              primary {
                                quote_author
                                quote_text {
                                  richText
                                }
                                quote_title
                              }
                              slice_type
                            }
                            ... on PrismicSupportArticleDataBodyImage {
                              id
                              slice_type
                              primary {
                                image {
                                  url(imgixParams: { maxW: 800 })
                                }
                                caption {
                                  text
                                }
                              }
                            }
                            ... on PrismicSupportArticleDataBodyVimeoVideo {
                              id
                              slice_type
                              slice_label
                              primary {
                                vimeo_video_id
                                vimeo_video_title
                              }
                            }
                            ... on PrismicSupportArticleDataBodyYoutubeVideo {
                              id
                              slice_type
                              slice_label
                              primary {
                                youtube_video_id
                                youtube_video_title
                              }
                            }
                            ... on PrismicSupportArticleDataBodyIframe {
                              id
                              slice_type
                              slice_label
                              primary {
                                iframe {
                                  richText
                                }
                              }
                            }
                          }
                        }
                    }
                    }
                }
            }
        }
   }
   fragment SupportPage on PrismicSupport {
    data {
      body {
        ... on PrismicSupportDataBodySupportArea {
          id
          primary {
            title {
              text
              html
            }
            section_image {
              gatsbyImageData(height: 166, layout: CONSTRAINED)
            }
            byline {
              text
              html
            }
          }
          slice_type
          items {
            category {
              document {
                ... on PrismicSupportCategory {
                  id
                  uid
                  data {
                    title {
                      html
                      text
                    }
                    image {
                      gatsbyImageData(height: 169, layout: CONSTRAINED)
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
   }
`
