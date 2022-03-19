import React from "react"

const GoogleMap = ({ query, title }) => {
  return (
    <iframe
      width="100%"
      height="450"
      frameBorder="0"
      style={{ border: "none" }}
      src={`https://www.google.com/maps/embed/v1/place?q=${query}&key=AIzaSyDFzb3Jp6-2OGFfOUzcf75_Onas1Il0PR0`}
      allowFullScreen
      title={title}
    />
  )
}

export default GoogleMap