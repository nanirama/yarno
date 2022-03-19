import React, { useState } from "react"
import { Button } from "@yarno/thread"
import { InlineSubscribe, SubscribeBox, Success, Error } from "./styles"

function validateEmail(email) {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}

const YarnSubscribe = ({ inline }) => {
  const [emailAddress, setEmailAddress] = useState("")
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)
  const handleEmailChange = event => {
    setError(null)
    setEmailAddress(event.target.value)
  }
  const handleSubscribeClick = async () => {
    if (validateEmail(emailAddress)) {
      setError(null)
      const response = await fetch("/api/contact-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: emailAddress,
          downloadListID: "2c598a44455e88cb3c08ef8db31df9cf"
        })
      })
        .then(function (response) {
          return response.json()
        })
        .then(function (data) {
          setSuccess("Thanks for subscribing!")
          setEmailAddress("")
        })
    } else {
      setError("Email address is invalid!")
    }
  }

  if (success) {
    return <Success>{success}</Success>
  }

  if (inline) {
    return (
      <InlineSubscribe>
        <div>
          <input
            type="email"
            placeholder="enter email"
            onChange={handleEmailChange}
            value={emailAddress}
            aria-label="email"
          />
          <Button
            label="Subscribe"
            secondary
            arrow
            onClick={handleSubscribeClick}
          />
        </div>
        {error && <Error>{error}</Error>}
      </InlineSubscribe>
    )
  } else {
    return (
      <SubscribeBox>
        <input
          aria-label="email"
          type="email"
          placeholder="Enter email address"
          onChange={handleEmailChange}
          value={emailAddress}
        />
        {error && <Error>{error}</Error>}
        <Button onClick={handleSubscribeClick} hollow label="subscribe" />
      </SubscribeBox>
    )
  }
}

export default YarnSubscribe
