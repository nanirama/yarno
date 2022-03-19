import React from "react"
import { graphql } from "gatsby"
import SqueezeLayout from "../components/SqueezeLayout"
import SliceMachine from "../slices/SliceMachine"

const Template = ({ data, location }) => {
  const page = data.prismicSqueezePage.data

  return (
    <SqueezeLayout
      location={location}
      layout={data.prismicSqueezePageLayout.data}>
      <SliceMachine body={page.body} />
    </SqueezeLayout>
  )
}

export default Template

export const postQuery = graphql`
  query ($id: String!) {
    ...PrismicSqueezePageLayout
    prismicSqueezePage(id: { eq: $id }) {
      data {
        body {
          ... on PrismicSqueezePageDataBodySqueezeHero {
            id
            slice_type
            primary {
              align_text
              squeeze_hero_content {
                richText
              }
              squeeze_hero_image {
                url
                alt
              }
              squeeze_hero_image_padding
              hero_form_reference {
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
            }
          }
          ... on PrismicSqueezePageDataBodyPageHeading {
            id
            slice_label
            slice_type
            primary {
              subtitle {
                richText
              }
              title {
                richText
              }
            }
          }
          ... on PrismicSqueezePageDataBodyLogoCloud {
            id
            slice_label
            slice_type
            items {
              logo_cloud_image {
                alt
                gatsbyImageData(height: 80)
              }
            }
            primary {
              logo_cloud_heading {
                richText
              }
            }
          }
          ... on PrismicSqueezePageDataBodyBackgroundImage {
            id
            primary {
              background_primary_image {
                alt
                url
              }
              background_primary_colour
              background_primary_image_height
              background_primary_image_width
            }
            slice_label
            slice_type
          }
          ... on PrismicSqueezePageDataBodyTextBlock {
            id
            slice_label
            slice_type
            primary {
              text_block_align
              text_block_background_colour
              text_block_vimeo_video_id
              text_block_content {
                richText
              }
              text_block_image {
                alt
                url
              }
              text_block_form_reference {
                id
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
            }
          }
          ... on PrismicSqueezePageDataBodySqueezeContactDetails {
            id
            primary {
              contact_email_label
              contact_email_link
              contact_phone_label
              contact_phone_link
              squeeze_contact_details_avatar {
                alt
                url
              }
              squeeze_contact_details_text {
                richText
              }
            }
            slice_label
            slice_type
          }
          ... on PrismicSqueezePageDataBodySqueezeLegalLinks {
            id
            primary {
              squeeze_disclaimer_link {
                url
              }
              squeeze_privacy_link {
                url
              }
            }
            slice_label
            slice_type
          }
          ... on PrismicSqueezePageDataBodyTestimonialHero {
            id
            slice_type
            slice_label
            primary {
              testimonial_author_image {
                alt
                url
              }
              testimonial_author_job_title
              testimonial_author_name
              testimonial_company_image {
                alt
                url
              }
              testimonial_company_name
              testimonial_cta_button_text
              testimonial_cta_url
              testimonial_quote
            }
          }
          ... on PrismicSqueezePageDataBodyForm {
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
          ... on PrismicSqueezePageDataBodyStatisticBlock {
            id
            slice_label
            slice_type
            primary {
              statistic_block_background_colour
            }
            items {
              statistic_label
              statistic_value
            }
          }
          ... on PrismicSqueezePageDataBodyColumns {
            id
            slice_type
            slice_label
            primary {
              columns_max_width
            }
            items {
              column_content {
                richText
              }
              column_image {
                alt
                url
              }
            }
          }
        }
      }
    }
  }
`