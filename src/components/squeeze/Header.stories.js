import React from "react"
import { action } from "@storybook/addon-actions"
import SqueezeHeader from "./Header"
import Theme from "../common/Theme"

export default {
  title: "Header",
  component: SqueezeHeader,
  decorators: [storyFn => <Theme>{storyFn()}</Theme>]
}

export const Default = () => <SqueezeHeader />
export const Alternate = () => <SqueezeHeader alternate />
export const WithBorder = () => <SqueezeHeader withBorder />