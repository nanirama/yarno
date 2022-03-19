import React, { useState } from "react"
import { Form, Container } from "./styles"

// Stage 19 for contact submissions

const Component = ({ form }) => {
  const [success, setSuccess] = useState(null)
  const {
    data: { submission_source, submit_button_label, success_message }
  } = form

  const handleSubmit = async event => {
    event.preventDefault()
    const response = await fetch("/api/contact-form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: event.target.elements.name.value,
        email: event.target.elements.email.value,
        stageID: 14,
        source: submission_source
      })
    })
      .then(function (response) {
        return response.json()
      })
      .then(function (data) {
        setSuccess(true)
      })
  }

  return (
    <Container>
      {success && success_message && <p>{success_message.richText}</p>}
      {!success && (
        <Form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              required
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email address"
              required
            />
          </div>
          <button type="submit">{submit_button_label}</button>
        </Form>
      )}
    </Container>
  )
}
export default Component
