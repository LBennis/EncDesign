// Local shim for the two @fluentui/react-icons glyphs referenced by the supplied
// theme, so the theme can be used unchanged without pulling in the full icon set.
import * as React from 'react'

const make = (path) => function FluentIconShim(props) {
  return (
    <svg viewBox="0 0 20 20" width="1em" height="1em" fill="currentColor" {...props}>
      {path}
    </svg>
  )
}

export const ChevronUpRegular = make(
  <path d="M15.35 12.35a.5.5 0 0 1-.7.05L10 8.4l-4.65 4a.5.5 0 1 1-.65-.76l5-4.3a.5.5 0 0 1 .65 0l5 4.3a.5.5 0 0 1 .05.7Z" />
)

export const DocumentQuestionMarkRegular = make(
  <path d="M6 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7l-5-5H6Zm4 1.5L14.5 8H10V3.5ZM9 13.5a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0Z" />
)
