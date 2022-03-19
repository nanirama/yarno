import React, { useState } from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Button } from "@yarno/thread"
import {
  Container,
  ContactSales,
  ContactForm,
  AdditionalContactSection,
  SupportContactItem,
  VisitSupportLink,
  ContactPerson,
  ContactPersonDetails,
  ContactNumber,
  SuccessBox,
  AdditionalContacts
} from "./styles"
function validateEmail(email) {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}

const Slice = ({ slice }) => {
  const initialFormValues = {
    name: "",
    email: "",
    phone: "",
    message: ""
  }
  const [formValues, setFormValues] = useState(initialFormValues)
  const { name, email, phone, message } = formValues

  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)

  const handleChange = event => {
    setError(null)
    const { name, value } = event.target
    setFormValues(formValues => ({
      ...formValues,
      [name]: value
    }))
  }

  const handleSubmit = async event => {
    event.preventDefault()
    const pageUri = location.href
    const pageName = location.pathname
    if (name === "") return setError("Please include your name.")
    if (!validateEmail(email)) return setError("Email address is invalid")
    setError(null)
    const response = await fetch("/api/contact-form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name,
        email: email,
        phone: phone,
        message: message,
        stageID: 19,
        source: pageUri
      })
    })
      .then(function (response) {
        return response.json()
      })
      .then(function (data) {
        setSuccess(true)
      })
    setSuccess("Thanks! We will get back to you as soon as we can.")
    setFormValues(initialFormValues)
  }

  return (
    <Container>
      <ContactSales>
        <h2>
          Interested in Yarno?
          <br />
          Get in touch with our sales team
        </h2>
        <ContactPerson>
          <GatsbyImage
            image={getImage(slice.primary.salesperson_image)}
            alt={slice.primary.salesperson_image.alt}
          />
          <ContactPersonDetails>
            <h3>Mark Eggers</h3>
            <p>Head of Sales</p>
            <ContactNumber href="tel:0401 872 305">
              <strong>M:</strong> 0401 872 305
            </ContactNumber>
            <ContactNumber href="tel:1300 79 75 46">
              <strong>P:</strong> 1300 79 75 46
            </ContactNumber>
            <ContactNumber href="mailto:mark@yarno.com.au">
              <strong>E:</strong> mark@yarno.com.au
            </ContactNumber>
          </ContactPersonDetails>
        </ContactPerson>
        {success ? (
          <SuccessBox>
            <p>{success}</p>
          </SuccessBox>
        ) : (
          <ContactForm>
            <label htmlFor="name">Name*</label>
            <input
              id="name"
              type="text"
              name="name"
              onChange={handleChange}
              value={name}
            />
            <label htmlFor="email">Email*</label>
            <input
              id="email"
              type="email"
              name="email"
              onChange={handleChange}
              value={email}
            />
            <label htmlFor="phone">Phone (optional)</label>
            <input
              id="phone"
              type="phone"
              name="phone"
              onChange={handleChange}
              value={phone}
            />
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              rows="5"
              name="message"
              onChange={handleChange}
              value={message}
            />
            {error && <Error>{error}</Error>}
            <Button label="Contact Sales" secondary onClick={handleSubmit} />
          </ContactForm>
        )}
      </ContactSales>
      <AdditionalContacts>
        <AdditionalContactSection>
          <h4>Looking for support?</h4>
          <p>
            We're here to help! If you're already using Yarno and have a
            question, query or issue, get in touch or check out our support
            page.
          </p>
          <SupportContactItem href="tel:1300 79 75 46">
            <i className="fa fa-phone" />
            1300 79 75 46
          </SupportContactItem>
          <SupportContactItem href="mailto:support@yarno.com.au">
            <i className="fa fa-envelope" style={{ fontWeight: 600 }} />
            support@yarno.com.au
          </SupportContactItem>
          <a href="https://support.yarno.com.au/contact" target="_blank">
            <Button label="Contact Support" />
          </a>
          <VisitSupportLink
            href="https://support.yarno.com.au/"
            target="_blank">
            Visit support page
          </VisitSupportLink>
        </AdditionalContactSection>
        <AdditionalContactSection>
          <h4>Are you a journalist?</h4>
          <p>
            We'd love to chat. If you're looking to talk about remote learning,
            microlearning, customer experience, hyperlearning or anything and
            everything else to do with workplace learning, get in touch. Send us
            an email at{" "}
            <a href="mailto:media@yarno.com.au">media@yarno.com.au</a> and we'll
            get back to you quick smart.
          </p>
        </AdditionalContactSection>
      </AdditionalContacts>
    </Container>
  )
}
export default Slice
