import React from "react"
import { RichText } from "prismic-reactjs"
import { TopSection, FancyLineDecoration, Bite } from "./styles"

const BiteSection = ({ slice }) => {
  const {
    bite_title,
    bite_description,
    bite_content,
    bite_content_secondary
  } = slice.primary
  return (
    <>
      <TopSection>
        <div>
          <FancyLineDecoration />
          <RichText render={bite_title.richText} />
          <RichText render={bite_description.richText} />
        </div>
      </TopSection>
      <Bite>
        <RichText render={bite_content.richText} />
        {bite_content_secondary && (
          <>
            <hr />
            <RichText render={bite_content_secondary.richText} />
          </>
        )}
      </Bite>
    </>
  )
}

export default BiteSection