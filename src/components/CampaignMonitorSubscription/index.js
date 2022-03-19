import React, { useState } from "react"
import { RichText } from "prismic-reactjs"
import { Form, Container, RadioButtons, YarnSubscribe } from "./styles"

const TextInput = ({ showLabel, labelText, children }) => {
  return (
    <>
      {showLabel && <label>{labelText}</label>}
      {children}
    </>
  )
}

const Component = ({ form }) => {
  const [success, setSuccess] = useState(null)
  const [subscribeTicked, setSubscribeTicked] = useState(false)
  const {
    data: {
      body: sliceZone,
      campaign_monitor_list_id: listID,
      submit_button_label: submitLabel,
      success_message: successMessage,
      include_yarn_subscribe_checkbox: withYarnSubscribe,
      consent_text: consentText,
      show_form_labels
    }
  } = form
  const toggleCheckbox = e => {
    setSubscribeTicked(!subscribeTicked)
  }

  const handleSubmit = async event => {
    event.preventDefault()
    const formData = new FormData(event.target)
    let object = { CustomFields: [] }
    formData.forEach((value, key) => {
      if (["name", "email", "downloadListID"].includes(key)) {
        object[key] = value
      } else {
        object["CustomFields"].push({
          Key: key,
          Value: value
        })
      }
    })
    const body = JSON.stringify(object)
    const response = await fetch("/api/contact-form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: body
    })
      .then(function (response) {
        return response.json()
      })
      .then(function (data) {
        setSuccess(true)
      })

    if (subscribeTicked && withYarnSubscribe) {
      handleYarnSubscribe(name, email)
    }
  }

  const handleYarnSubscribe = (name, email) => {
    const response = fetch("/api/contact-form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name,
        email: email,
        downloadListID: "2c598a44455e88cb3c08ef8db31df9cf" // yarn list ID
      })
    }).then(function (response) {
      return response.json()
    })
  }

  return (
    <Container>
      {success && successMessage && (
        <RichText render={successMessage.richText} />
      )}
      {!success && (
        <Form onSubmit={handleSubmit}>
          <div>
            <input
              type="hidden"
              name="downloadListID"
              id="downloadListID"
              value={listID}
            />
            <TextInput showLabel={show_form_labels} labelText="Name">
              <input
                type="text"
                name="name"
                id="name"
                placeholder={show_form_labels ? "" : "Name"}
                required
              />
            </TextInput>

            <TextInput showLabel={show_form_labels} labelText="Email">
              <input
                type="email"
                name="email"
                id="email"
                placeholder={show_form_labels ? "" : "Email address"}
                required
              />
            </TextInput>
          </div>
          {sliceZone &&
            sliceZone.map((zone, index) => {
              switch (zone.slice_type) {
                case "text_input":
                  return (
                    <TextInput
                      key={`form-input-${index}`}
                      showLabel={show_form_labels}
                      labelText={zone.primary.text_input_label}>
                      <input
                        type="text"
                        name={zone.primary.text_input_name_attribute}
                        id={zone.primary.text_input_name_attribute}
                        required={zone.primary.text_input_required}
                        placeholder={show_form_labels ? "" : zone.primary.text_input_label}
                      />
                    </TextInput>
                  )
                case "radio_input":
                  return (
                    <RadioButtons key={`form-input-${index}`}>
                      {show_form_labels && (
                        <label>{zone.primary.radio_input_label}</label>
                      )}
                      {zone.items.map((item, i) => (
                        <div key={`form-input-radio-${i}`}>
                          <input
                            key={`form-input-radio-${i}`}
                            type="radio"
                            name={zone.primary.radio_input_name_attribute}
                            id={item.radio_input_option_label}
                            value={item.radio_input_option_label}
                            required={zone.primary.radio_input_required}
                          />
                          <label htmlFor={item.radio_input_option_label}>
                            {item.radio_input_option_label}
                          </label>
                        </div>
                      ))}
                    </RadioButtons>
                  )
              }
            })}
          {withYarnSubscribe && (
            <YarnSubscribe>
              <div>
                <input
                  name="yarn-subscribe"
                  id="yarn-subscribe"
                  type="checkbox"
                  checked={subscribeTicked}
                  onChange={toggleCheckbox}
                />
              </div>
              <label htmlFor="yarn-subscribe">
                Also, sign up for our monthly e-newsletter, The Yarn, to receive
                the latest in learning trends, remote work, customer service and
                other cool stuff!
              </label>
            </YarnSubscribe>
          )}
          <button type="submit">{submitLabel}</button>
          <p>
            <small>{consentText}</small>
          </p>
        </Form>
      )}
    </Container>
  )
}

export default Component
