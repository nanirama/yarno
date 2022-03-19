import React from "react"
import { RichText } from "prismic-reactjs"
import SqueezeContactDetails from "../../components/SqueezeContactDetails"

const Slice = ({ slice }) => {
  return (
    <SqueezeContactDetails
      imageURL={slice.primary.squeeze_contact_details_avatar.url}
      imageAlt={slice.primary.squeeze_contact_details_avatar.alt}
    >
      <RichText render={slice.primary.squeeze_contact_details_text.richText} />
      <p>
        <i className="fa fa-phone" />
        <a href={slice.primary.contact_phone_link}>{slice.primary.contact_phone_label}</a>
      </p>
      <p>
        <i className="fa fa-envelope" style={{ fontWeight: 600 }} />
        <a href={slice.primary.contact_email_link}>{slice.primary.contact_email_label}</a>
      </p>
    </SqueezeContactDetails>
  )
}

export default Slice
