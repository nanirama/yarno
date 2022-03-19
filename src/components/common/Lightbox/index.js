import React, { useState, Fragment } from "react"
import styled from "styled-components"
import { DialogOverlay, DialogContent } from "@reach/dialog"

const CloseIcon = styled.i`
  background-color: ${props => props.theme.colors.primary};
  border-radius: 50%;
  color: white;
  padding: 0.3rem;
  position: absolute;
  right: -1rem;
  top: -1rem;
  z-index: 1;
  :hover {
    cursor: pointer;
  }
`

function Lightbox(props) {
  return (
    <Fragment>
      {props.open && (
        <DialogOverlay style={{ zIndex: 5 }} onDismiss={props.toggleLightbox}>
          <DialogContent
            style={{
              padding: 0,
              background: "transparent",
              position: "relative"
            }}
            className="custom-dialog-content">
            <CloseIcon
              role="button"
              className="fa fa-cross"
              onClick={props.toggleLightbox}
            />

            {props.children}
          </DialogContent>
        </DialogOverlay>
      )}
    </Fragment>
  )
}

export default Lightbox
