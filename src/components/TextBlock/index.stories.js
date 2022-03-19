import React from "react"
import TextBlock from "."

export default {
  title: "Components/TextBlock",
  component: TextBlock
}

export const Default = () => {
  return (
    <TextBlock align="left" imageURL={"https://yarno-marketing.imgix.net/target.png"}>
      <h2>Heading</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus rhoncus eleifend nunc quis volutpat. Nullam aliquet libero sit amet enim pharetra porttitor. Nam eget lacus sed erat tempus consectetur id et sapien. Quisque eget velit quis est semper rhoncus eget a neque. Ut maximus cursus nisi id efficitur. Proin egestas lacus bibendum lectus vulputate blandit. Fusce odio velit, finibus a ultricies et, blandit vitae erat. Aenean ornare lorem orci, sed suscipit quam commodo a.
      </p>
    </TextBlock>
  )
}
