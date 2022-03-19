import React from "react"
import TestimonialHero from "../../components/TestimonialHero"

const Slice = ({ slice }) => {
  return (
    <TestimonialHero
      quote={slice.primary.testimonial_quote}
      author={slice.primary.testimonial_author_name}
      authorImageURL={slice.primary.testimonial_author_image.url}
      authorJobTitle={slice.primary.testimonial_author_job_title}
      company={slice.primary.testimonial_company_name}
      companyLogo={slice.primary.testimonial_company_image.url}
      ctaLink={slice.primary.testimonial_cta_url}
      ctaText={slice.primary.testimonial_cta_button_text}
    />
  )
}

export default Slice
